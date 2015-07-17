
    /*****************************************************************************
    *   Defines all shared attributes for game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class MfgGameObject implements LibShape2DOwner
    {
        /** The bounding shape. */
        public          iShape                      :LibShape2D                     = null;
        /** The sprite representation. */
        public          iSprite                     :LibSprite                      = null;
        /** The animation to affect onto this wall. */
        public          iAnimations                 :Array<LibAnimation>            = null;
        /** The collision plan specifies how to react on being collided. */
        private         iCollisionPlan              :MfgCollisionPlan               = null;

        /** The collision object. */
        public          iCollision                  :MfgGameObjectCollision         = null;
        /** Current translucency for the sprite. */
        public          iAlpha                      :number                         = 1.0;
        /** Flags disabled state. */
        public          iDisabled                   :boolean                        = false;

        /*****************************************************************************
        *   Creates a new game object.
        *
        *   @param  aShape          A bounding rect.
        *   @param  aSprite         The graphical representation.
        *   @param  aAnimations     The animation for this wall. May be <code>null</code> if no animation is requested.
        *   @param  aCollisionPlan  The collision plan for this game object.
        *   @param  aDebugCollision The collision-debug context.
        *****************************************************************************/
        public constructor
        (
            aShape:LibShape2D,
            aSprite:LibSprite,
            aAnimations:Array<LibAnimation>,
            aCollisionPlan:MfgCollisionPlan,
            aDebugCollision:MfgCollisionDebug
        )
        {
            this.iShape         = aShape;
            this.iSprite        = aSprite;
            this.iAnimations    = ( aAnimations == null ? [] : aAnimations );
            this.iCollisionPlan = aCollisionPlan;

            //set the collision object
            this.iCollision      = new MfgGameObjectCollision( this, aDebugCollision );

            //set the anchor for the animation if an animation is specified
            for ( var i:number = 0; i < this.iAnimations.length; ++i )
            {
                this.iAnimations[ i ].reset( this.iShape.iAnchor );
            }
        }

        /*****************************************************************************
        *   Delivers the shape that is owned by the implementing object.
        *
        *   @return The shape of this owner.
        *****************************************************************************/
        public getShape():LibShape2D
        {
            return this.iShape;
        }

        /*****************************************************************************
        *   Delivers the collision plan.
        *
        *   @return The collision plan for this game object.
        *****************************************************************************/
        public getCollisionPlan():MfgCollisionPlan
        {
            return this.iCollisionPlan;
        }

        /*****************************************************************************
        *   Being invoked when this game object shall vanish.
        *****************************************************************************/
        public vanish():void
        {
            if ( !this.iDisabled )
            {
                this.iDisabled = true;

                if ( !MfgDebugSettings.DEBUG_DISABLE_SOUNDS ) MfgGame.soundSystem.playSound( MfgSound.SOUND_FX_BLING );
            }
        }

        /*****************************************************************************
        *   Assigns a new sprite for the player.
        *
        *   @param  newSprite       The new sprite to use for this block.
        *****************************************************************************/
        public setNewSprite( newSprite:LibSprite )
        {
            this.iSprite = newSprite;
        }

        /*****************************************************************************
        *   Being invoked each tick, this method renders the game object.
        *****************************************************************************/
        public render()
        {
            //check if an animation is applied
            for ( var i:number = 0; i < this.iAnimations.length; ++i )
            {
                //update animation
                this.iAnimations[ i ].render();

                //move the wall horizontal according to the animation
                var deltaX     = this.iAnimations[ i ].getLastDeltaX();
                var directionX = this.iAnimations[ i ].getLastMovementDirectionX();
                this.moveWithCollisionCheck( directionX, deltaX );

                //move the wall vertical according to the animation
                var deltaY     = this.iAnimations[ i ].getLastDeltaY();
                var directionY = this.iAnimations[ i ].getLastMovementDirectionY();
                this.moveWithCollisionCheck( directionY, deltaY );
            }
        }

        /*****************************************************************************
        *   Draws this sprite for the specified camera context.
        *
        *   @param  context The 2d drawing context.
        *   @param  camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( context:CanvasRenderingContext2D, camera:LibCamera )
        {
            //draw sprite if specified and desired
            if ( !MfgDebugSettings.DEBUG_DISABLE_SPRITES && this.iSprite != null )
            {
                this.iSprite.draw
                (
                    context,
                    this.iShape.iAnchor.iX - camera.iOffset.iX,
                    this.iShape.iAnchor.iY - camera.iOffset.iY,
                    this.iAlpha
                );
            }

            //draw debug context
            if ( this.iShape instanceof LibRect2D )
            {
                this.iCollision.iDebugCollision.drawDebugRect( context, camera, <LibRect2D>this.iShape );
            }
            else if ( this.iShape instanceof LibRightTriangle2D )
            {
                this.iCollision.iDebugCollision.drawDebugRightTriangle( context, camera, <LibRightTriangle2D>this.iShape );
            }

            //draw debug animation anchor
            if ( MfgDebugSettings.DEBUG_DRAW_ANIMATION_ANCHORS )
            {
                for ( var i:number = 0; i < this.iAnimations.length; ++i )
                {
                    LibDrawing.strokeLine
                    (
                        context,
                        this.iAnimations[ i ].iAnchor.iX - camera.iOffset.iX - MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        this.iAnimations[ i ].iAnchor.iY - camera.iOffset.iY - MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        this.iAnimations[ i ].iAnchor.iX - camera.iOffset.iX + MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        this.iAnimations[ i ].iAnchor.iY - camera.iOffset.iY + MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        MfgDebugSettings.DEBUG_COLOR_ANCHORS
                    );

                    LibDrawing.strokeLine
                    (
                        context,
                        this.iAnimations[ i ].iAnchor.iX - camera.iOffset.iX - MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        this.iAnimations[ i ].iAnchor.iY - camera.iOffset.iY + MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        this.iAnimations[ i ].iAnchor.iX - camera.iOffset.iX + MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        this.iAnimations[ i ].iAnchor.iY - camera.iOffset.iY - MfgDebugSettings.DEBUG_SIZE_ANIMATION_ANCHOR,
                        MfgDebugSettings.DEBUG_COLOR_ANCHORS
                    );
                }
            }
        }

        /*****************************************************************************
        *   Moves this game object for the specified distance into the specified direction.
        *   The movement is interrupted if a collision occurred.
        *
        *   @param  movingDirection     The direction to move to.
        *   @param  delta               The movement distance to move.
        *   @return                     <code>true</code> if the movement could be performed successfully without colliding.
        *****************************************************************************/
        public moveWithCollisionCheck( movingDirection:LibDirection2D, delta:number ):boolean
        {
            //gather all foreign game objects that should be capable of collisions
            var gameObjects:Array<LibShape2DOwner> = MfgGame.level.getAllForeignCollidableGameObjects(  this, movingDirection );

            for ( var i:number = 0; i < delta; ++i )
            {
                //move this object
                this.move( movingDirection );
/*
                //move sticky objects too
                if ( this instanceof MfgWall )
                {
                    var thisWall:MfgWall = <MfgWall>this;
                    if ( thisWall.iTopStuckedGameObjects != null )
                    {
                        for ( var i:number = 0; i < thisWall.iTopStuckedGameObjects.length; ++i )
                        {
                            //thisWall.iTopStuckedGameObjects[ i ].moveWithCollisionCheck( movingDirection, 1 );
                            thisWall.iTopStuckedGameObjects[ i ].move( movingDirection );
                        }
                    }
                }
*/
                //handle collisions and take back this object if the collision could not be solved
                if ( !this.iCollision.handleCollisions( movingDirection, gameObjects ) )
                {
                    //perform AUTO-GAP for the PLAYER on moving LEFT or RIGHT
                    if ( this instanceof MfgPlayer && ( movingDirection == LibDirection2D.LEFT || movingDirection == LibDirection2D.RIGHT ) )
                    {
                        if ( !this.moveWithCollisionCheck( LibDirection2D.UP, MfgSettings.PLAYER_AUTO_GAP_Y ) )
                        {
                            this.iCollision.iDebugCollision.setCollisionIndicator( LibDirection2D.UP, false );

                            this.moveBack( movingDirection );
                            return false;
                        }

                        this.iCollision.iDebugCollision.setCollisionIndicator( movingDirection, false );
                    }
                    else
                    {
                        this.moveBack( movingDirection );
                        return false;
                    }
                }
            }

            return true;
        }

        /*****************************************************************************
        *   Moves the player one pixel into the specified direction.
        *
        *   @param  movingDirection     The direction to move to.
        *****************************************************************************/
        public move( movingDirection:LibDirection2D ):void
        {
            switch ( movingDirection )
            {
                case LibDirection2D.LEFT:
                {
                    --this.iShape.iAnchor.iX;
                    break;
                }

                case LibDirection2D.RIGHT:
                {
                    ++this.iShape.iAnchor.iX;
                    break;
                }

                case LibDirection2D.UP:
                {
                    --this.iShape.iAnchor.iY;
                    break;
                }

                case LibDirection2D.DOWN:
                {
                    ++this.iShape.iAnchor.iY;
                    break;
                }
            }
        }

        /*****************************************************************************
        *   Moves the player one pixel into the OPPOSITE of the specified direction.
        *
        *   @param  movingDirection     The OPPOSITE direction to move to.
        *****************************************************************************/
        public moveBack( movingDirection:LibDirection2D ):void
        {
            switch ( movingDirection )
            {
                case LibDirection2D.LEFT:
                {
                    ++this.iShape.iAnchor.iX;
                    break;
                }

                case LibDirection2D.RIGHT:
                {
                    --this.iShape.iAnchor.iX;
                    break;
                }

                case LibDirection2D.UP:
                {
                    ++this.iShape.iAnchor.iY;
                    break;
                }

                case LibDirection2D.DOWN:
                {
                    --this.iShape.iAnchor.iY;
                    break;
                }
            }
        }
    }
