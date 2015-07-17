
    /*****************************************************************************
    *   A rectangular in 2D space.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibRect2D extends LibShape2D
    {
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
            super( aLeft, aTop, aWidth, aHeight );
        }

        /*****************************************************************************
        *   Checks if this rect contains the given point.
        *
        *   @param  x  The X coordinate of the point to check.
        *   @param  y  The Y coordinate of the point to check.
        *   @return    <code>true</code> if the point lies inside the rectangle.
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
        public collidesWithRect( rect:LibRect2D ):boolean
        {
            return !(
                    this.iAnchor.iX                         >= rect.iAnchor.iX + rect.iSize.iWidth
                ||  this.iAnchor.iX  + this.iSize.iWidth    <= rect.iAnchor.iX
                ||  this.iAnchor.iY                         >= rect.iAnchor.iY + rect.iSize.iHeight
                ||  this.iAnchor.iY  + this.iSize.iHeight   <= rect.iAnchor.iY
            );
        }

        /*****************************************************************************
        *   Returns all shapes of the given shapes that intersect with this rect.
        *
        *   @param  shapes  The shapes to check for intersection.
        *   @return         An array with all shapes that intersect this rect.
        *                   The array will be empty if no intersection occured.
        *****************************************************************************/
        public getCollidingShapes( shapes:Array<LibShape2DOwner> ):Array<LibShape2DOwner>
        {
            var collidingShapes:Array<LibShape2DOwner> = Array<LibShape2DOwner>();

            for ( var i:number = 0; i < shapes.length; ++i )
            {
                if ( shapes[ i ].getShape() instanceof LibRect2D )
                {
                    if ( this.collidesWithRect( <LibRect2D>shapes[ i ].getShape() ) )
                    {
                        collidingShapes.push( shapes[ i ] );
                    }
                }
                else if ( shapes[ i ].getShape() instanceof LibRightTriangle2D )
                {
                    if ( ( <LibRightTriangle2D>shapes[ i ].getShape() ).collidesWithRect( this ) )
                    {
                        collidingShapes.push( shapes[ i ] );
                    }
                }
            }

            return collidingShapes;
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
