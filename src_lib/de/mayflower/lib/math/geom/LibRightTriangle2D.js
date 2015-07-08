var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
/*****************************************************************************
*   A right angled triangle in 2D space.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibRightTriangle2D = (function (_super) {
    __extends(LibRightTriangle2D, _super);
    /*****************************************************************************
    *   Constructs a new right angled triangle.
    *
    *   @param  aCorner     The position of the right angled corner.
    *   @param  aLeft       Left coordinate for this triangle.
    *   @param  aTop        Top coordinate for this triangle.
    *   @param  aWidth      Width for the new triangle.
    *   @param  aHeight     Height for the new triangle.
    *****************************************************************************/
    function LibRightTriangle2D(aCorner, aLeft, aTop, aWidth, aHeight) {
        _super.call(this, aLeft, aTop, aWidth, aHeight);
        /** The position of the right angled corner. */
        this.iCorner = null;
        this.iCorner = aCorner;
    }
    /*****************************************************************************
    *   Checks if the given rect intersects this rect.
    *
    *   @param  rect    The rect to check for intersection.
    *   @return         <code>true</code> if the rects collide.
    *                   Otherwise <code>false</code>.
    *****************************************************************************/
    LibRightTriangle2D.prototype.collidesWithRect = function (rect) {
        //check if the rect is outside of the bounding box
        if (this.iAnchor.iX >= rect.iAnchor.iX + rect.iSize.iWidth
            || this.iAnchor.iX + this.iSize.iWidth <= rect.iAnchor.iX
            || this.iAnchor.iY >= rect.iAnchor.iY + rect.iSize.iHeight
            || this.iAnchor.iY + this.iSize.iHeight <= rect.iAnchor.iY) {
            return false;
        }
        //switch triangle type
        switch (this.iCorner) {
            case LibRightCorner2D.LEFT_TOP:
                {
                    if (rect.iAnchor.iX < this.iAnchor.iX)
                        return true;
                    var ratioX = (rect.iAnchor.iX - this.iAnchor.iX) / this.iSize.iWidth;
                    var maxY = this.iAnchor.iY + this.iSize.iHeight - Math.floor(this.iSize.iHeight * ratioX);
                    return (rect.iAnchor.iY < maxY);
                }
            case LibRightCorner2D.RIGHT_TOP:
                {
                    if (rect.iAnchor.iX + rect.iSize.iWidth > this.iAnchor.iX + this.iSize.iWidth)
                        return true;
                    var ratioX = ((this.iAnchor.iX + this.iSize.iWidth) - (rect.iAnchor.iX + rect.iSize.iWidth)) / this.iSize.iWidth;
                    var maxY = this.iAnchor.iY + this.iSize.iHeight - Math.floor(this.iSize.iHeight * ratioX);
                    return (rect.iAnchor.iY < maxY);
                }
            case LibRightCorner2D.LEFT_BOTTOM:
                {
                    if (rect.iAnchor.iX < this.iAnchor.iX)
                        return true;
                    var ratioX = (rect.iAnchor.iX - this.iAnchor.iX) / this.iSize.iWidth;
                    var maxY = this.iAnchor.iY + Math.floor(this.iSize.iHeight * ratioX);
                    return (rect.iAnchor.iY + rect.iSize.iHeight > maxY);
                }
            case LibRightCorner2D.RIGHT_BOTTOM:
                {
                    if (rect.iAnchor.iX + rect.iSize.iWidth > this.iAnchor.iX + this.iSize.iWidth)
                        return true;
                    var ratioX = ((this.iAnchor.iX + this.iSize.iWidth) - (rect.iAnchor.iX + rect.iSize.iWidth)) / this.iSize.iWidth;
                    var maxY = this.iAnchor.iY + Math.floor(this.iSize.iHeight * ratioX);
                    return (rect.iAnchor.iY + rect.iSize.iHeight > maxY);
                }
        }
        return true;
    };
    /*****************************************************************************
    *   Returns all shapes of the given shapes that intersect with this right triangle.
    *
    *   @param  shapes  The shapes to check for intersection.
    *   @return         An array with all shapes that intersect this right triangle.
    *                   The array will be empty if no intersection occured.
    *****************************************************************************/
    LibRightTriangle2D.prototype.getCollidingShapes = function (shapes) {
        var collidingShapes = Array();
        for (var i = 0; i < shapes.length; ++i) {
            if (shapes[i].getShape() instanceof LibRect2D) {
                if (this.collidesWithRect(shapes[i].getShape())) {
                    collidingShapes.push(shapes[i]);
                }
            }
            else if (shapes[i].getShape() instanceof LibRightTriangle2D) {
                MfgDebug.collision.log("TODO Collisions between right angled triangles aren't implemented yet!");
            }
        }
        return collidingShapes;
    };
    return LibRightTriangle2D;
})(LibShape2D);
//# sourceMappingURL=LibRightTriangle2D.js.map