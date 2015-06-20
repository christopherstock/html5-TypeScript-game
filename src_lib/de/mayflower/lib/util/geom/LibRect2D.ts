
    /*****************************************************************************
    *   A rectangular in 2D space.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class LibRect2D
    {
        /** The left top coordinate. */
        public              iAnchor         :LibPoint2D                 = null;

        /** The width and height. */
        public              iSize           :LibDimension2D             = null;

        /*****************************************************************************
        *   Constructs a new rectangular.
        *
        *   @param  aLeft      Left coordinate for this rect.
        *   @param  aTop       Top coordinate for this rect.
        *   @param  aWidth     Width for the new rect.
        *   @param  aHeight    Height for the new rect.
        *****************************************************************************/
        public constructor( aLeft:number, aTop:number, aWidth:number, aHeight:number )
        {
            this.iAnchor    = new LibPoint2D(     aLeft,  aTop    );
            this.iSize      = new LibDimension2D( aWidth, aHeight );
        }

        /*****************************************************************************
        *   Checks if the given rect contains the given point.
        *
        *   @param  x  The X coordinate of the point to check.
        *   @param  y  The Y coordinate of the point to check.
        *   @return    <code>true</code> if the point lies in the rectangle.
        *              Otherwise <code>false</code>.
        *****************************************************************************/
        public containsPoint( x:number, y:number ):boolean
        {
            return (
                    x  >= this.iAnchor.iX
                &&  x  <  this.iAnchor.iX    + this.iSize.iWidth
                &&  y  >= this.iAnchor.iY
                &&  y  <  this.iAnchor.iY     + this.iSize.iHeight
            );
        }

        /*****************************************************************************
        *   Checks if the given rect intersects this rect.
        *
        *   @param  rect    The rect to check for intersection.
        *   @return         <code>true</code> if the rects collide.
        *                   Otherwise <code>false</code>.
        *****************************************************************************/
        public rectsCollide( rect:LibRect2D ):boolean
        {
            return (
                    this.iAnchor.iX + this.iSize.iWidth     > rect.iAnchor.iX
                &&  this.iAnchor.iX                         < rect.iAnchor.iX + rect.iSize.iWidth
                &&  this.iAnchor.iY  + this.iSize.iHeight   > rect.iAnchor.iY
                &&  this.iAnchor.iY                         < rect.iAnchor.iY + rect.iSize.iHeight
                &&  !this.equalsWithRect( rect )
            );
        }

        /*****************************************************************************
        *   Returns all rects of the given rects that intersect with this rect.
        *
        *   @param  rects   The rects to check for intersection.
        *   @return         An array with all rects that intersect this rect.
        *                   The array will be empty if no intersection occured.
        *****************************************************************************/
        public getCollidingRects( rects:Array<LibRect2DOwner> ):Array<LibRect2DOwner>
        {
            var collidingRects:Array<LibRect2DOwner> = Array<LibRect2DOwner>();

            for ( var i:number = 0; i < rects.length; ++i )
            {
                if ( this.rectsCollide( rects[ i ].getRect() ) )
                {
                    collidingRects.push( rects[ i ] );
                }
            }

            return collidingRects;
        }

        /*****************************************************************************
        *   Checks if the given rect equals with this rect.
        *
        *   @param  rect    The rect to check for equality.
        *   @return         <code>true</code> if the rects equal.
        *                   Otherwise <code>false</code>.
        *****************************************************************************/
        public equalsWithRect( rect:LibRect2D ):boolean
        {
            return (
                    this.iAnchor.iX       ==  rect.iAnchor.iX
                &&  this.iSize.iWidth     ==  rect.iSize.iWidth
                &&  this.iAnchor.iY       ==  rect.iAnchor.iY
                &&  this.iSize.iHeight    ==  rect.iSize.iHeight
            );
        }
    }
