
    /*****************************************************************************
    *   A point in 2D space.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibPoint2D
    {
        /** Coordinate X. */
        public              iX              :number                     = 0;

        /** Coordinate Y. */
        public              iY              :number                     = 0;

        /*****************************************************************************
        *   Constructs a new point.
        *
        *   @param  aX          X coordinate for this point.
        *   @param  aY          Y coordinate for this point.
        *****************************************************************************/
        public constructor( aX:number, aY:number )
        {
            this.iX     = aX;
            this.iY     = aY;
        }
    }
