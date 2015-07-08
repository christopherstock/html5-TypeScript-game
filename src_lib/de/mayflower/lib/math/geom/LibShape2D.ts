
    /*****************************************************************************
    *   This class represents a geometrical shape in 2D space
    *   and is the abstract superclass of all 2D bodies.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class LibShape2D
    {
        /** The left top coordinate of the bounding rectangle. */
        public              iAnchor         :LibPoint2D                 = null;

        /** The width and height of the bounding rectangle. */
        public              iSize           :LibDimension2D             = null;

        /*****************************************************************************
        *   Constructs a new shape in 2D space.
        *
        *   @param  aLeft   Left coordinate of the bounding rectangle.
        *   @param  aTop    Top coordinate of the bounding rectangle.
        *   @param  aWidth  Width of the bounding rectangle.
        *   @param  aHeight Height of the bounding rectangle.
        *****************************************************************************/
        public constructor( aLeft:number, aTop:number, aWidth:number, aHeight:number )
        {
            this.iAnchor = new LibPoint2D(     aLeft,  aTop    );
            this.iSize   = new LibDimension2D( aWidth, aHeight );
        }
    }
