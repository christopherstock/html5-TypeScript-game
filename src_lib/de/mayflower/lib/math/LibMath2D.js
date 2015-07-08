/*****************************************************************************
*   Offers geometrical arithmetic functionality.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibMath2D = (function () {
    function LibMath2D() {
    }
    /*****************************************************************************
    *   Delivers the sin value of the given angle in degrees.
    *
    *   @param  degrees     An angle to get the sin for. Not in radiants but in degrees.
    *   @return             The sin-value for the specified angle.
    *****************************************************************************/
    LibMath2D.sinDeg = function (degrees) {
        return Math.sin(degrees * Math.PI / 180.0);
    };
    /*****************************************************************************
    *   Delivers the cos value of the given angle in degrees.
    *
    *   @param  degrees     An angle to get the cos for. Not in radiants but in degrees.
    *   @return             The cos-value for the specified angle.
    *****************************************************************************/
    LibMath2D.cosDeg = function (degrees) {
        return Math.cos(degrees * Math.PI / 180.0);
    };
    /*****************************************************************************
    *   Returns the distant point from a specified point with the
    *   specified angle and distance in degrees.
    *
    *   @param  point       The center point for this sin/cos operation.
    *   @param  degrees     The angle for the distance. In degrees.
    *   @param  distX       The distance X from center.
    *   @param  distY       The distance Y from center.
    *   @return             The distant point.
    *****************************************************************************/
    LibMath2D.sinCosPoint = function (point, degrees, distX, distY) {
        return new LibPoint2D(point.iX + LibMath2D.cosDeg(degrees) * distX, point.iY + LibMath2D.sinDeg(degrees) * distY);
    };
    return LibMath2D;
})();
//# sourceMappingURL=LibMath2D.js.map