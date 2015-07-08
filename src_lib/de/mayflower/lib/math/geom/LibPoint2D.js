/*****************************************************************************
*   A point in 2D space.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibPoint2D = (function () {
    /*****************************************************************************
    *   Constructs a new point.
    *
    *   @param  aX          X coordinate for this point.
    *   @param  aY          Y coordinate for this point.
    *****************************************************************************/
    function LibPoint2D(aX, aY) {
        /** Coordinate X. */
        this.iX = 0;
        /** Coordinate Y. */
        this.iY = 0;
        this.iX = aX;
        this.iY = aY;
    }
    return LibPoint2D;
})();
//# sourceMappingURL=LibPoint2D.js.map