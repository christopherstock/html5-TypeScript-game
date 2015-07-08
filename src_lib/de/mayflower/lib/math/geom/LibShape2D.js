/*****************************************************************************
*   This class represents a geometrical shape in 2D space
*   and is the abstract superclass of all 2D bodies.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibShape2D = (function () {
    /*****************************************************************************
    *   Constructs a new shape in 2D space.
    *
    *   @param  aLeft   Left coordinate of the bounding rectangle.
    *   @param  aTop    Top coordinate of the bounding rectangle.
    *   @param  aWidth  Width of the bounding rectangle.
    *   @param  aHeight Height of the bounding rectangle.
    *****************************************************************************/
    function LibShape2D(aLeft, aTop, aWidth, aHeight) {
        /** The left top coordinate of the bounding rectangle. */
        this.iAnchor = null;
        /** The width and height of the bounding rectangle. */
        this.iSize = null;
        this.iAnchor = new LibPoint2D(aLeft, aTop);
        this.iSize = new LibDimension2D(aWidth, aHeight);
    }
    return LibShape2D;
})();
//# sourceMappingURL=LibShape2D.js.map