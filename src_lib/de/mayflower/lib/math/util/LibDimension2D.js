/*****************************************************************************
*   A dimension in 2D space.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibDimension2D = (function () {
    /*****************************************************************************
    *   Constructs a new dimension.
    *
    *   @param  aWidth      The width for this dimension.
    *   @param  aHeight     The height for this dimension.
    *****************************************************************************/
    function LibDimension2D(aWidth, aHeight) {
        /** Dimension's width. */
        this.iWidth = 0;
        /** Dimension's height. */
        this.iHeight = 0;
        this.iWidth = aWidth;
        this.iHeight = aHeight;
    }
    return LibDimension2D;
})();
//# sourceMappingURL=LibDimension2D.js.map