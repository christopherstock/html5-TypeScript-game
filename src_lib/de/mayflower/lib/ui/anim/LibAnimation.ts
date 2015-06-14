
    /*****************************************************************************
    *   Represents an animation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibAnimation
    {
        /** The anchor. */
        public                  iAnchor                     :LibPoint2D                 = null;

        /** The current location. */
        public                  iLocation                   :LibPoint2D                 = null;

        /** The current animation tick. */
      //public                  iTestTick                   :number                     = 0;

        /** The last movement delta along the X axis. */
        public                  iLastDeltaX                 :number                     = 0;

        /** The last movement delta along the Y axis. */
        public                  iLastDeltaY                 :number                     = 0;

        /*****************************************************************************
        *   Resets this animation and connect an rectangle owner to it.
        *
        *   @param  owner      The anchor to set.
        *****************************************************************************/
        public reset( anchor:LibPoint2D )
        {
            this.iAnchor   = anchor;
            this.iLocation = new LibPoint2D
            (
                this.iAnchor.iX,
                this.iAnchor.iY
            );
        }

        /*****************************************************************************
        *   Being invoked each tick, this method handles this animation.
        *****************************************************************************/
        public tick():void
        {
        }

        /*****************************************************************************
        *   Returns the last horizontal movement delta.
        *
        *   @return The last movement delta on the X axis.
        *****************************************************************************/
        public getLastDeltaX():number
        {
            return this.iLastDeltaX;
        }

        /*****************************************************************************
         *   Returns the last vertical movement delta.
         *
         *   @return The last movement delta on the Y axis.
         *****************************************************************************/
        public getLastDeltaY():number
        {
            return this.iLastDeltaY;
        }
    }
