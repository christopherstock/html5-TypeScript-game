
    /*****************************************************************************
    *   Represents an animation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibAnimation
    {
        /** The anchor point. */
        public                  iAnchor                     :LibPoint2D                 = null;

        /** The current animation tick. */
        public                  iCurrentTick                :number                     = 0;
        /** Specifies the current moving direction. */
        public                  iNegativeMoving             :boolean                    = false;
        /** The current location of the animation. */
        public                  iCurrentLocation            :LibPoint2D                 = null;

        /** The last movement delta along the X axis. */
        public                  iLastDeltaX                 :number                     = 0;
        /** The last movement delta along the Y axis. */
        public                  iLastDeltaY                 :number                     = 0;

        /*****************************************************************************
        *   Resets this animation and specifies the anchor point.
        *
        *   @param  anchor      The anchor point for this animation.
        *****************************************************************************/
        public reset( anchor:LibPoint2D ):void
        {
            this.iCurrentTick     = 0;
            this.iNegativeMoving  = false;

            this.iAnchor          = new LibPoint2D
            (
                anchor.iX,
                anchor.iY
            );

            this.iCurrentLocation = new LibPoint2D
            (
                anchor.iX,
                anchor.iY
            );
        }

        /*****************************************************************************
        *   Being invoked each tick, this method handles this animation.
        *****************************************************************************/
        public render():void
        {
        }

        /*****************************************************************************
        *   Returns the last horizontal movement delta.
        *
        *   @return The last movement delta on the X axis.
        *****************************************************************************/
        public getLastDeltaX():number
        {
            return ( this.iLastDeltaX < 0 ? -this.iLastDeltaX : this.iLastDeltaX );
        }

        /*****************************************************************************
        *   Returns the last vertical movement delta.
        *
        *   @return The last movement delta on the Y axis.
        *****************************************************************************/
        public getLastDeltaY():number
        {
            return ( this.iLastDeltaY < 0 ? -this.iLastDeltaY : this.iLastDeltaY );
        }

        /*****************************************************************************
        *   Returns the last horizontal movement direction.
        *
        *   @return The last movement direction on the X axis.
        *****************************************************************************/
        public getLastMovementDirectionX():number
        {
            return ( this.iLastDeltaX < 0 ? LibDirection2D.LEFT : LibDirection2D.RIGHT );
        }

        /*****************************************************************************
        *   Returns the last vertical movement direction.
        *
        *   @return The last movement direction on the Y axis.
        *****************************************************************************/
        public getLastMovementDirectionY():number
        {
            return ( this.iLastDeltaY < 0 ? LibDirection2D.UP : LibDirection2D.DOWN );
        }
    }
