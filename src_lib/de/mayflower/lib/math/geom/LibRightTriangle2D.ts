
    /*****************************************************************************
    *   A right angled triangle in 2D space.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibRightTriangle2D extends LibShape2D
    {
        /** The position of the right angled corner. */
        public              iCorner                     :LibRightCorner2D                   = null;

        /*****************************************************************************
        *   Constructs a new right angled triangle.
        *
        *   @param  aCorner     The position of the right angled corner.
        *   @param  aLeft       Left coordinate for this triangle.
        *   @param  aTop        Top coordinate for this triangle.
        *   @param  aWidth      Width for the new triangle.
        *   @param  aHeight     Height for the new triangle.
        *****************************************************************************/
        public constructor( aCorner: LibRightCorner2D, aLeft:number, aTop:number, aWidth:number, aHeight:number )
        {
            super( aLeft, aTop, aWidth, aHeight );

            this.iCorner = aCorner;
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
            //check if the rect is outside of the bounding box
            if (
                    this.iAnchor.iX                         >= rect.iAnchor.iX + rect.iSize.iWidth
                ||  this.iAnchor.iX  + this.iSize.iWidth    <= rect.iAnchor.iX
                ||  this.iAnchor.iY                         >= rect.iAnchor.iY + rect.iSize.iHeight
                ||  this.iAnchor.iY  + this.iSize.iHeight   <= rect.iAnchor.iY
            )
            {
                return false;
            }

            //switch triangle type
            switch ( this.iCorner )
            {
                case LibRightCorner2D.LEFT_TOP:
                {
                    if ( rect.iAnchor.iX < this.iAnchor.iX ) return true;

                    var ratioX:number = ( rect.iAnchor.iX - this.iAnchor.iX ) / this.iSize.iWidth;
                    var maxY:number   = this.iAnchor.iY + this.iSize.iHeight - Math.floor( this.iSize.iHeight * ratioX );

                    return ( rect.iAnchor.iY < maxY );
                }

                case LibRightCorner2D.RIGHT_TOP:
                {
                    if ( rect.iAnchor.iX + rect.iSize.iWidth > this.iAnchor.iX + this.iSize.iWidth ) return true;

                    var ratioX:number = ( ( this.iAnchor.iX + this.iSize.iWidth ) - ( rect.iAnchor.iX + rect.iSize.iWidth ) ) / this.iSize.iWidth;
                    var maxY:number   = this.iAnchor.iY + this.iSize.iHeight - Math.floor( this.iSize.iHeight * ratioX );

                    return ( rect.iAnchor.iY < maxY );
                }

                case LibRightCorner2D.LEFT_BOTTOM:
                {
                    if ( rect.iAnchor.iX < this.iAnchor.iX ) return true;

                    var ratioX:number = ( rect.iAnchor.iX - this.iAnchor.iX ) / this.iSize.iWidth;
                    var maxY:number   = this.iAnchor.iY + Math.floor( this.iSize.iHeight * ratioX );

                    return ( rect.iAnchor.iY + rect.iSize.iHeight > maxY );
                }

                case LibRightCorner2D.RIGHT_BOTTOM:
                {
                    if ( rect.iAnchor.iX + rect.iSize.iWidth > this.iAnchor.iX + this.iSize.iWidth ) return true;

                    var ratioX:number = ( ( this.iAnchor.iX + this.iSize.iWidth ) - ( rect.iAnchor.iX + rect.iSize.iWidth ) ) / this.iSize.iWidth;
                    var maxY:number   = this.iAnchor.iY + Math.floor( this.iSize.iHeight * ratioX );

                    return ( rect.iAnchor.iY + rect.iSize.iHeight > maxY );
                }
            }

            return true;
        }

        /*****************************************************************************
        *   Returns all shapes of the given shapes that intersect with this right triangle.
        *
        *   @param  shapes  The shapes to check for intersection.
        *   @return         An array with all shapes that intersect this right triangle.
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
                    console.log( "Sorry .. collisions between right angled triangles aren't implemented yet!" );
/*
                    if ( ( <LibRightTriangle2D>shapes[ i ].getShape() ).collidesWithRect( this ) )
                    {
                        collidingShapes.push( shapes[ i ] );
                    }
*/
                }
            }

            return collidingShapes;
        }
    }
