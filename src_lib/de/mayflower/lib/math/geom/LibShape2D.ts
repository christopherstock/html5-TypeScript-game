
    /*****************************************************************************
    *   This class represents a geometrical shape in 2D space
    *   and is the abstract superclass of all 2D bodies.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
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


        /*****************************************************************************
        *   Returns all shapes of the given shapes that intersect with this shape.
        *
        *   @param  shapes  The shapes to check for intersection.
        *   @return         An array with all shapes that intersect this shape.
        *   @throws         Though this method is abstract, an Error is raised if it's
        *                   being invoked directly.
        *****************************************************************************/
        public getCollidingShapes( shapes:Array<LibShape2DOwner> ):Array<LibShape2DOwner>
        {
            throw new Error("The abstract method is invoked!");
        }
    }
