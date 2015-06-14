
    /*****************************************************************************
    *   An offset in 2D space.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibOffset2D
    {
        /** Offset X. */
        public              iX            :number                     = 0;

        /** Offset Y. */
        public              iY            :number                     = 0;

        /*****************************************************************************
        *   Constructs a new offset.
        *
        *   @param  aOffsetX        Horizontal offset amount.
        *   @param  aOffsetY        Vertical   offset amount.
        *****************************************************************************/
        public constructor( aOffsetX:number, aOffsetY:number )
        {
            this.iX     = aOffsetX;
            this.iY     = aOffsetY;
        }
    }
