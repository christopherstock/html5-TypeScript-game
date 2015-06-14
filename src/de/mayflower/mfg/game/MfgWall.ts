
    /*****************************************************************************
    *   Represents a colliding wall.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgWall extends MfgGameObject
    {
        /** Specifies if this wall is reluctant on collisions. */
        private                     iReluctant              :boolean                        = false;

        /*****************************************************************************
        *   Creates a wall.
        *
        *   @param  aX          Location X.
        *   @param  aY          Location Y.
        *   @param  aWidth      Wall width.
        *   @param  aHeight     Wall height.
        *   @param  aReluctant  Specifies if this wall should submit collisions.
        *   @param  aAnimation  The animation for this wall.
        *                       May be <code>null</code> if no animation is requested.
        *                       TODO make class LibAnimationNone
        *****************************************************************************/
        public constructor( aX:number, aY:number, aWidth:number, aHeight:number, aReluctant:boolean, aAnimation:LibAnimation )
        {
            super
            (
                new LibRect2D
                (
                    aX,
                    aY,
                    aWidth,
                    aHeight
                ),
                null,
                new LibCollisionDebug
                (
                    MfgSettings.DEBUG_DRAW_RECT_WALL,
                    ( aReluctant ? MfgSettings.DEBUG_COLOR_RECT_WALL_RELUCTANT_BORDER : MfgSettings.DEBUG_COLOR_RECT_WALL_SOLID_BORDER ),
                    MfgSettings.DEBUG_COLOR_RECT_WALL_FILL,
                    MfgSettings.DEBUG_COLOR_RECT_COLLISION_INDICATOR,
                    MfgSettings.DEBUG_COLLISION_INDICATOR_SIZE,
                    MfgSettings.DEBUG_STROKE_SIZE
                )
            );

            this.iReluctant = aReluctant;
            this.iAnimation = aAnimation;

            //set anchor for the animation if an animation is specified
            if ( this.iAnimation != null )
            {
                this.iAnimation.reset
                (
                    this.iRect.iAnchor
                );
            }
        }

        /*****************************************************************************
        *   Being invoked each tick, this method animates the wall.
        *****************************************************************************/
        public tick()
        {
            //check if an animation is applied
            if ( this.iAnimation != null )
            {
                //update animation
                this.iAnimation.tick();

                //move the wall horizontal according to the animation
                this.moveWithCollisionCheck
                (
                    LibDirection.RIGHT,
                    this.iAnimation.getLastDeltaX()
                );

                //move the wall vertical according to the animation
                this.moveWithCollisionCheck
                (
                    LibDirection.DOWN,
                    this.iAnimation.getLastDeltaY()
                );
            }
        }

        /*****************************************************************************
        *   Delivers the collision plan.
        *
        *   @return The collision plan for this game object.
        *****************************************************************************/
        public getCollisionPlan():LibCollisionPlan
        {
            return ( this.iReluctant ? LibCollisionPlan.RELUCTANT : LibCollisionPlan.SOLID );
        }
    }
