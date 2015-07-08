/*****************************************************************************
*   Manages all debug information for one game object.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibCollisionDebug = (function () {
    /*****************************************************************************
    *   Creates a new game object debug context.
    *
    *   @param  aDrawShape                  Specifies if a debug rect should be drawn.
    *   @param  aDebugRectColorStroke       The stroke color for the debug rect.
    *   @param  aDebugRectColorFill         The fill color for the debug rect.
    *   @param  aDebugRectColorColliding    The fill color for the colliding debug rect.
    *   @param  aCollisionIndicatorSize     The thickness of the collision indicator edge.
    *   @param  aStrokeSize                 The thickness of the debug rect's stroke.
    *****************************************************************************/
    function LibCollisionDebug(aDrawShape, aDebugRectColorStroke, aDebugRectColorFill, aDebugRectColorColliding, aCollisionIndicatorSize, aStrokeSize) {
        /** Flags if the debug shape should be drawn. */
        this.iDrawShape = false;
        /** The stroke color for the debug rect. */
        this.iRectColorStroke = null;
        /** The fill color for the debug rect. */
        this.iRectColorFill = null;
        /** The fill color for the colliding debug rect. */
        this.iRectColorColliding = null;
        /** The thickness of the collision indicator edge. */
        this.iCollisionIndicatorSize = 0;
        /** The thickness of the rects stroke. */
        this.iStrokeSize = 0;
        /** Indicates if the game object is currently colliding at it's left edge. */
        this.iCollidingLeft = false;
        /** Indicates if the game object is currently colliding at it's top edge. */
        this.iCollidingTop = false;
        /** Indicates if the game object is currently colliding at it's right edge. */
        this.iCollidingRight = false;
        /** Indicates if the game object is currently colliding at it's bottom edge. */
        this.iCollidingBottom = false;
        this.iDrawShape = aDrawShape;
        this.iRectColorStroke = aDebugRectColorStroke;
        this.iRectColorFill = aDebugRectColorFill;
        this.iRectColorColliding = aDebugRectColorColliding;
        this.iCollisionIndicatorSize = aCollisionIndicatorSize;
        this.iStrokeSize = aStrokeSize;
    }
    /*****************************************************************************
    *   Draws a debug model of the specified rectangle.
    *
    *   @param  context The drawing context.
    *   @param  camera  The camera position to draw this block for.
    *   @param  rect    The debug rect to draw.
    *****************************************************************************/
    LibCollisionDebug.prototype.drawDebugRect = function (context, camera, rect) {
        //only if the debug flag is enabled for this debug object
        if (this.iDrawShape) {
            //fill
            LibDrawing.fillRect(context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, rect.iSize.iHeight, this.iRectColorFill);
            //draw debug indication
            var collisionIndicatorSize = 0;
            if (this.iCollidingLeft) {
                collisionIndicatorSize = (this.iCollisionIndicatorSize > rect.iSize.iWidth ? rect.iSize.iWidth : this.iCollisionIndicatorSize);
                LibDrawing.fillRect(context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, collisionIndicatorSize, rect.iSize.iHeight, this.iRectColorColliding);
            }
            if (this.iCollidingBottom) {
                collisionIndicatorSize = (this.iCollisionIndicatorSize > rect.iSize.iHeight ? rect.iSize.iHeight : this.iCollisionIndicatorSize);
                LibDrawing.fillRect(context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY + rect.iSize.iHeight - collisionIndicatorSize - camera.iOffset.iY, rect.iSize.iWidth, collisionIndicatorSize, this.iRectColorColliding);
            }
            if (this.iCollidingRight) {
                collisionIndicatorSize = (this.iCollisionIndicatorSize > rect.iSize.iWidth ? rect.iSize.iWidth : this.iCollisionIndicatorSize);
                LibDrawing.fillRect(context, rect.iAnchor.iX + rect.iSize.iWidth - collisionIndicatorSize - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, collisionIndicatorSize, rect.iSize.iHeight, this.iRectColorColliding);
            }
            if (this.iCollidingTop) {
                collisionIndicatorSize = (this.iCollisionIndicatorSize > rect.iSize.iHeight ? rect.iSize.iHeight : this.iCollisionIndicatorSize);
                LibDrawing.fillRect(context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, collisionIndicatorSize, this.iRectColorColliding);
            }
            //stroke
            LibDrawing.strokeRect(context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, rect.iSize.iHeight, this.iRectColorStroke, this.iStrokeSize);
        }
    };
    /*****************************************************************************
    *   Draws a debug model of the specified right triangle.
    *
    *   @param  context  The drawing context.
    *   @param  camera   The camera position to draw this block for.
    *   @param  triangle The debug triangle to draw.
    *****************************************************************************/
    LibCollisionDebug.prototype.drawDebugRightTriangle = function (context, camera, triangle) {
        //only if the debug flag is enabled for this debug object
        if (this.iDrawShape) {
            //switch right corner
            switch (triangle.iCorner) {
                case LibRightCorner2D.LEFT_TOP:
                    {
                        //fill
                        LibDrawing.fillPolygon(context, [
                            triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY,
                            triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY,
                            triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight
                        ], this.iRectColorFill);
                        //stroke
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY, triangle.iSize.iWidth, this.iStrokeSize, this.iRectColorStroke);
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY, this.iStrokeSize, triangle.iSize.iHeight, this.iRectColorStroke);
                        LibDrawing.strokeLine(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight, triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY, this.iRectColorStroke);
                        break;
                    }
                case LibRightCorner2D.RIGHT_TOP:
                    {
                        //fill
                        LibDrawing.fillPolygon(context, [
                            triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY,
                            triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY,
                            triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight
                        ], this.iRectColorFill);
                        //stroke
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY, triangle.iSize.iWidth, this.iStrokeSize, this.iRectColorStroke);
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth - this.iStrokeSize, triangle.iAnchor.iY - camera.iOffset.iY, this.iStrokeSize, triangle.iSize.iHeight, this.iRectColorStroke);
                        LibDrawing.strokeLine(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY, triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight, this.iRectColorStroke);
                        break;
                    }
                case LibRightCorner2D.LEFT_BOTTOM:
                    {
                        //fill
                        LibDrawing.fillPolygon(context, [
                            triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY,
                            triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight,
                            triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight
                        ], this.iRectColorFill);
                        //stroke
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight - this.iStrokeSize, triangle.iSize.iWidth, this.iStrokeSize, this.iRectColorStroke);
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY, this.iStrokeSize, triangle.iSize.iHeight, this.iRectColorStroke);
                        LibDrawing.strokeLine(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY, triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight - this.iStrokeSize, this.iRectColorStroke);
                        break;
                    }
                case LibRightCorner2D.RIGHT_BOTTOM:
                    {
                        //fill
                        LibDrawing.fillPolygon(context, [
                            triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight,
                            triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY,
                            triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight
                        ], this.iRectColorFill);
                        //stroke
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth - this.iStrokeSize, triangle.iAnchor.iY - camera.iOffset.iY, this.iStrokeSize, triangle.iSize.iHeight, this.iRectColorStroke);
                        LibDrawing.fillRect(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight - this.iStrokeSize, triangle.iSize.iWidth, this.iStrokeSize, this.iRectColorStroke);
                        LibDrawing.strokeLine(context, triangle.iAnchor.iX - camera.iOffset.iX, triangle.iAnchor.iY - camera.iOffset.iY + triangle.iSize.iHeight - this.iStrokeSize, triangle.iAnchor.iX - camera.iOffset.iX + triangle.iSize.iWidth, triangle.iAnchor.iY - camera.iOffset.iY, this.iRectColorStroke);
                        break;
                    }
            }
        }
        /*
                    //draw debug rect over game object
                    LibDrawing.fillRect(   context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, rect.iSize.iHeight, this.iRectColorFill );
        
                    //draw debug indication
                    var collisionIndicatorSize:number = 0;
                    if ( this.iCollidingLeft   )
                    {
                        collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iWidth ? rect.iSize.iWidth : this.iCollisionIndicatorSize );
                        LibDrawing.fillRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, collisionIndicatorSize, rect.iSize.iHeight, this.iRectColorColliding );
                    }
                    if ( this.iCollidingBottom )
                    {
                        collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iHeight ? rect.iSize.iHeight : this.iCollisionIndicatorSize );
                        LibDrawing.fillRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY + rect.iSize.iHeight - collisionIndicatorSize - camera.iOffset.iY, rect.iSize.iWidth, collisionIndicatorSize, this.iRectColorColliding );
                    }
                    if ( this.iCollidingRight  )
                    {
                        collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iWidth ? rect.iSize.iWidth : this.iCollisionIndicatorSize );
                        LibDrawing.fillRect( context, rect.iAnchor.iX + rect.iSize.iWidth - collisionIndicatorSize - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, collisionIndicatorSize, rect.iSize.iHeight, this.iRectColorColliding );
                    }
                    if ( this.iCollidingTop    )
                    {
                        collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iHeight ? rect.iSize.iHeight : this.iCollisionIndicatorSize );
                        LibDrawing.fillRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, collisionIndicatorSize, this.iRectColorColliding );
                    }
        
                    //draw rect stroke
                    LibDrawing.strokeRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, rect.iSize.iHeight, this.iRectColorStroke, this.iStrokeSize );
        */
    };
    /*****************************************************************************
    *   Sets the collision indicator for the specified direction.
    *
    *   @param  movingDirection The direction to set the collision indicator for.
    *   @param  value           The flag to set.
    *****************************************************************************/
    LibCollisionDebug.prototype.setCollisionIndicator = function (movingDirection, value) {
        switch (movingDirection) {
            case LibDirection2D.LEFT:
                {
                    this.iCollidingLeft = value;
                    break;
                }
            case LibDirection2D.UP:
                {
                    this.iCollidingTop = value;
                    break;
                }
            case LibDirection2D.RIGHT:
                {
                    this.iCollidingRight = value;
                    break;
                }
            case LibDirection2D.DOWN:
                {
                    this.iCollidingBottom = value;
                    break;
                }
        }
    };
    /*****************************************************************************
     *   Unflags the collision indicators for all directions.
     *****************************************************************************/
    LibCollisionDebug.prototype.unsetCollisionIndicators = function () {
        this.iCollidingLeft = false;
        this.iCollidingTop = false;
        this.iCollidingRight = false;
        this.iCollidingBottom = false;
    };
    return LibCollisionDebug;
})();
//# sourceMappingURL=MfgCollisionDebug.js.map