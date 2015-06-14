
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
        public                  iTestTick                   :number                     = 0;

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
    }
