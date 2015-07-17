
    /*****************************************************************************
    *   Handles the collisions for game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class MfgGameObjectCollision
    {
        /** The game object that owns this collision object. */
        private                 iParentGameObject           :MfgGameObject              = null;
        /** The collision debug object. */
        public                  iDebugCollision             :LibCollisionDebug          = null;

        /*****************************************************************************
        *   Creates the collision scheme for a game object.
        *
        *   @param  aParentGameObject The game object to handle all collisions for.
        *   @param  aDebugCollision   The collision-debug context.
        *****************************************************************************/
        public constructor( aParentGameObject:MfgGameObject, aDebugCollision:LibCollisionDebug )
        {
            this.iParentGameObject = aParentGameObject;
            this.iDebugCollision   = aDebugCollision;
        }

        /*****************************************************************************
        *   Handles collisions of this game-object with the specified rects
        *   on having moved into the specified direction.
        *
        *   @param  movingDirection The movement direction that leads to this collision check.
        *   @param  gameObjects     All game-objects that are capable for collision and will therefore be checked.
        *   @return                 <code>true</code> if this game-object is free of collisions now.
        *                           Otherwise <code>false</code>.
        *****************************************************************************/
        public handleCollisions( movingDirection:LibDirection2D, gameObjects:Array<LibShape2DOwner> ):boolean
        {
            //calculate all colliding rects
            var collidingObjects:Array<LibShape2DOwner> = this.iParentGameObject.getShape().getCollidingShapes( gameObjects );

            //check if objects collide occurred
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

                //check if this collision can be solved
                var collisionSolved:boolean = this.solveCollision( collidingObjects, movingDirection )

                //set the debug collision indicator if the collision could not be solved
                if ( !collisionSolved )
                {
                    this.iDebugCollision.setCollisionIndicator( movingDirection, true );
                }

                //solve this collision
                return collisionSolved;
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
        private solveCollision( collidingObjects:Array<LibShape2DOwner>, movingDirection:LibDirection2D ):boolean
        {
            //solve the collision by VANISHING this game object if this is a VANISHING game object
            if ( this.iParentGameObject.getCollisionPlan() == MfgCollisionPlan.VANISHING )
            {
                this.iParentGameObject.vanish();

                return true;
            }

            //browse all colliding VANISHING game objects
            for ( var i:number = 0; i < collidingObjects.length; ++i )
            {
                var collidingGameObject:MfgGameObject = <MfgGameObject>collidingObjects[ i ];
                if ( collidingGameObject.getCollisionPlan() == MfgCollisionPlan.VANISHING )
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
/*
                //STICK this game object to the top if the movement is DOWN and this is a STICKY WALL
                if
                (
                        movingDirection == LibDirection.DOWN
                    &&  collidingGameObject instanceof MfgWall
                )
                {
                    var collidingWall:MfgWall = <MfgWall>collidingGameObject;
                    if ( collidingWall.iStickyTop )
                    {
                        collidingWall.iTopStuckedGameObjects = [ this.iParentGameObject ];
                        MfgDebug.stickyWalls.log( "This object is getting STUCK to this colliding wall!" );
                   }
                }
*/
                //SOLID_ALL objects will deny this collision solve
                if ( collidingGameObject.getCollisionPlan() == MfgCollisionPlan.SOLID_ALL )
                {
                    MfgDebug.collision.log( " solving: SOLID_ALL wall will DENY collision solve" );
                    return false;
                }

                //SOLID_TOP objects will deny this collision solve if the movement is DOWN and the game objects collides this object's TOP LINE
                if
                (
                        collidingGameObject.getCollisionPlan() == MfgCollisionPlan.SOLID_TOP
                    &&  movingDirection == LibDirection2D.DOWN
                    &&  this.iParentGameObject.getShape().iAnchor.iY + this.iParentGameObject.getShape().iSize.iHeight == collidingGameObject.getShape().iAnchor.iY + 1
                )
                {
                    MfgDebug.collision.log( " solving: SOLID_TOP wall will DENY collision solve" );
                    return false;
                }
            }

            var reluctantCollisionSolved:boolean = true;

            //browse all colliding RELUCTANT game objects
            for ( var i:number = 0; i < collidingObjects.length; ++i )
            {
                var collidingGameObject:MfgGameObject = <MfgGameObject>collidingObjects[ i ];
                if ( collidingGameObject.getCollisionPlan() == MfgCollisionPlan.RELUCTANT )
                {
                    MfgDebug.collision.log( " solving: RELUCTANT wall will be pushed" );

                    //push this game object
                    collidingGameObject.move( movingDirection );

                    //gather all foreign game objects that should be capable of collisions and handle collisions for this colliding game object
                    var gameObjects:Array<LibShape2DOwner> = MfgGame.level.getAllForeignCollidableGameObjects( collidingGameObject, movingDirection );
                    var collisionFree:boolean             = collidingGameObject.iCollision.handleCollisions( movingDirection, gameObjects );

                    MfgDebug.collision.log( "  RELUCTANT game object is collision free [" + collisionFree + "]" );

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
                    if ( collidingGameObject.getCollisionPlan() == MfgCollisionPlan.RELUCTANT )
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
