
    /*****************************************************************************
    *   Defines all shared attributes for game objects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgGameObject implements LibRect2DOwner
    {
        /** The bounding rect. */
        public          iRect                       :LibRect2D                      = null;

        /** The sprite representation. */
        public          iSprite                     :LibSprite                      = null;

        /** Current translucency for the sprite. */
        public          iAlpha                      :number                         = 1.0;

        /** The collision debug object. */
        public          iDebugCollision             :LibCollisionDebug             = null;

        /** The animation to affect onto this wall. */
        public          iAnimation                  :LibAnimation                   = null;

        /** The collision object. */
        public          iCollision                  :MfgGameObjectCollision         = null;

        /*****************************************************************************
        *   Creates a new game object.
        *
        *   @param  aRect       A bounding rect.
        *   @param  aSprite     The graphical representation.
        *   @param  aDebug      The debug context.
        *****************************************************************************/
        public constructor( aRect:LibRect2D, aSprite:LibSprite, aDebug:LibCollisionDebug )
        {
            this.iRect           = aRect;
            this.iSprite         = aSprite;
            this.iDebugCollision = aDebug;
            this.iCollision      = new MfgGameObjectCollision( this );
        }

        /*****************************************************************************
        *   Delivers the rectangle that is owned by the implementing object.
        *
        *   @return The rectangle of this owner.
        *****************************************************************************/
        public getRect():LibRect2D
        {
            return this.iRect;
        }

        /*****************************************************************************
        *   Delivers the collision plan.
        *
        *   @return The collision plan for this game object.
        *****************************************************************************/
        public getCollisionPlan():LibCollisionPlan
        {
            return null;
        }

        /*****************************************************************************
        *   Being invoked when this game object shall vanish.
        *****************************************************************************/
        public vanish():void
        {
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
        *   Draws this sprite for the specified camera context.
        *
        *   @param  camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( camera:LibCamera )
        {
            //draw sprite if specified and desired
            if ( !MfgSettings.DEBUG_HIDE_SPRITES && this.iSprite != null )
            {
                this.iSprite.draw
                (
                    MfgGame.canvas.getContext(),
                    this.iRect.iAnchor.iX - camera.iOffset.iX,
                    this.iRect.iAnchor.iY - camera.iOffset.iY,
                    this.iAlpha
                );
            }

            //draw debug context
            this.iDebugCollision.drawDebugRect( MfgGame.canvas.getContext(), camera, this.iRect );
        }

        /*****************************************************************************
        *   Moves this game object for the specified distance into the specified direction.
        *   The movement is interrupted if a collision occurred.
        *
        *   @param  movingDirection     The direction to move to.
        *   @param  delta               The movement distance to move.
        *****************************************************************************/
        public moveWithCollisionCheck( movingDirection:LibDirection, delta:number )
        {
            for ( var i:number = 0; i < delta; ++i )
            {
                this.move( movingDirection );
                if ( !this.iCollision.handleCollisions( movingDirection ) )
                {
                    this.moveBack( movingDirection );
                    return;
                }
            }
        }

        /*****************************************************************************
        *   Moves the player one pixel into the specified direction.
        *
        *   @param  movingDirection     The direction to move to.
        *****************************************************************************/
        public move( movingDirection:LibDirection ):void
        {
            switch ( movingDirection )
            {
                case LibDirection.LEFT:
                {
                    --this.iRect.iAnchor.iX;
                    break;
                }

                case LibDirection.RIGHT:
                {
                    ++this.iRect.iAnchor.iX;
                    break;
                }

                case LibDirection.UP:
                {
                    --this.iRect.iAnchor.iY;
                    break;
                }

                case LibDirection.DOWN:
                {
                    ++this.iRect.iAnchor.iY;
                    break;
                }
            }
        }

        /*****************************************************************************
        *   Moves the player one pixel into the OPPOSITE of the specified direction.
        *
        *   @param  movingDirection     The OPPOSITE direction to move to.
        *****************************************************************************/
        public moveBack( movingDirection:LibDirection ):void
        {
            switch ( movingDirection )
            {
                case LibDirection.LEFT:
                {
                    ++this.iRect.iAnchor.iX;
                    break;
                }

                case LibDirection.RIGHT:
                {
                    --this.iRect.iAnchor.iX;
                    break;
                }

                case LibDirection.UP:
                {
                    ++this.iRect.iAnchor.iY;
                    break;
                }

                case LibDirection.DOWN:
                {
                    --this.iRect.iAnchor.iY;
                    break;
                }
            }
        }
    }
