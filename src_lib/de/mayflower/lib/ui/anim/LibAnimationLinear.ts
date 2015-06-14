
    /*****************************************************************************
    *   Represents an animation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibAnimationLinear extends LibAnimation
    {
        /** The moving angle. */
        public                  iAngle                          :number                 = 0;

        /*****************************************************************************
        *   Creates a new linear animation.
        *
        *   @param  aAngle  The anchor to set.
        *****************************************************************************/
        public constructor( aAngle:number )
        {
            super();

            this.iAngle = aAngle;
        }

        /*****************************************************************************
        *   Being invoked each tick, this method handles this animation.
        *****************************************************************************/
        public tick():void
        {


            this.iLastDeltaX = 2;
            this.iLastDeltaY = -1; // !


/*
            this.iLocation = LibMath2D.sinCosPoint
            (
                this.iAnchor,
                this.iAngle,
                this.iTestTick,
                this.iTestTick
            );
*/
            //++this.iTestTick;



/*
            this.iLocation.iX = this.iAnchor.iX + ;
            this.iLocation.iY = this.iAnchor.iY + ;
*/
        }
    }
