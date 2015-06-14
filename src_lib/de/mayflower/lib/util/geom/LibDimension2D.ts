
    /*****************************************************************************
    *   A dimension in 2D space.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibDimension2D
    {
        /** Dimension's width. */
        public              iWidth                  :number                     = 0;

        /** Dimension's height. */
        public              iHeight                 :number                     = 0;

        /*****************************************************************************
        *   Constructs a new dimension.
        *
        *   @param  aWidth      The width for this dimension.
        *   @param  aHeight     The height for this dimension.
        *****************************************************************************/
        public constructor( aWidth:number, aHeight:number )
        {
            this.iWidth  = aWidth;
            this.iHeight = aHeight;
        }
    }
