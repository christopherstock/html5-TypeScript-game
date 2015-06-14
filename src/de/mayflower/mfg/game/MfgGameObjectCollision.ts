
    /*****************************************************************************
    *   Handles the collisions for game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgGameObjectCollision
    {
        /** The game object that owns this collision object. */
        private                 iParentGameObject           :MfgGameObject              = null;

        /*****************************************************************************
        *   Creates the collision scheme for a game object.
        *
        *   @param  aParentGameObject The game object to handle all collisions for.
        *****************************************************************************/
        public constructor( aParentGameObject:MfgGameObject )
        {
            this.iParentGameObject = aParentGameObject;
        }

        /*****************************************************************************
        *   Handles collisions of this game-object with the specified rects
        *   on having moved into the specified direction.
        *
        *   @param  movingDirection The movement direction that leads to this collision check.
        *   @return                 <code>true</code> if this game-object is free of collisions now.
        *                           Otherwise <code>false</code>.
        *****************************************************************************/
        public handleCollisions( movingDirection:LibDirection ):boolean
        {
            //gather all foreign game objects
            var gameObjects:Array<LibRect2DOwner>      = MfgGame.level.getAllForeignCollidableGameObjects(  this.iParentGameObject );

            //calculate all colliding rects
            var collidingObjects:Array<LibRect2DOwner> = this.iParentGameObject.getRect().getCollidingRects( gameObjects );

            //check if collision occurred
            if ( collidingObjects.length > 0 )
            {
                //log the collision info
                MfgDebug.collision.log( "" );
                MfgDebug.collision.log
                (
                        "Collision-Check: "
                    +   "gameObjects "      + "[" + gameObjects.length      + "] "
                    +   "collidingObjects " + "[" + collidingObjects.length + "]"
                );

                //set debug collision indicator for this moving direction
                this.iParentGameObject.iDebugCollision.setCollisionIndicator( movingDirection );

                //solve this collision
                return this.solveCollision( collidingObjects, movingDirection );
            }

            return true;
        }

        /*****************************************************************************
        *   Tries to solve the collision with the specified colliding objects.
        *
        *   @param collidingObjects All colliding objects where collision must be solved for.
        *   @param movingDirection  The last moving direction that lead to the specified colliding objects.
        *   @return                 <code>true</code> if the parent game object is free of collisions now.
        *                           Otherwise <code>false</code>.
        *****************************************************************************/
        private solveCollision( collidingObjects:Array<LibRect2DOwner>, movingDirection:LibDirection ):boolean
        {
            //browse all colliding VANISHING game objects
            for ( var i:number = 0; i < collidingObjects.length; ++i )
            {
                var collidingGameObject:MfgGameObject = <MfgGameObject>collidingObjects[ i ];
                if ( collidingGameObject.getCollisionPlan() == LibCollisionPlan.VANISHING )
                {
                    MfgDebug.collision.log( " solving: VANISHING wall will vanish" );

                    //vanish the colliding rect
                    collidingGameObject.vanish();
                }
            }

            //browse all colliding SOLID game objects
            for ( var i:number = 0; i < collidingObjects.length; ++i )
            {
                var collidingGameObject:MfgGameObject = <MfgGameObject>collidingObjects[ i ];
                if ( collidingGameObject.getCollisionPlan() == LibCollisionPlan.SOLID )
                {
                    MfgDebug.collision.log( " solving: SOLID wall will DENY collision solve" );
                    return false;
                }
            }

            var reluctantCollisionSolved:boolean = true;

            //browse all colliding RELUCTANT game objects
            for ( var i:number = 0; i < collidingObjects.length; ++i )
            {
                var collidingGameObject:MfgGameObject = <MfgGameObject>collidingObjects[ i ];
                if ( collidingGameObject.getCollisionPlan() == LibCollisionPlan.RELUCTANT )
                {
                    MfgDebug.collision.log( " solving: RELUCTANT wall will be pushed" );

                    //push the wall
                    collidingGameObject.move( movingDirection );

                    //handle the collisions for the colliding wall
                    var collisionFree:boolean = collidingGameObject.iCollision.handleCollisions( movingDirection );

                    MfgDebug.collision.log( "  RELUCTANT wall is collision free [" + collisionFree + "]" );

                    if ( !collisionFree )
                    {
                        reluctantCollisionSolved = false;
                    }
                }
            }

            //RESET all RELUCTANT game objects if reluctant collisions could not be solved
            if ( !reluctantCollisionSolved )
            {
                //browse all colliding RELUCTANT walls
                for ( var i:number = 0; i < collidingObjects.length; ++i )
                {
                    var collidingGameObject:MfgGameObject = <MfgGameObject>collidingObjects[ i ];
                    if ( collidingGameObject.getCollisionPlan() == LibCollisionPlan.RELUCTANT )
                    {
                        MfgDebug.collision.log( " solving: RELUCTANT wall will be RESET" );

                        //reset the wall
                        collidingGameObject.moveBack( movingDirection );
                    }
                }
            }

            return reluctantCollisionSolved;
        }
    }
