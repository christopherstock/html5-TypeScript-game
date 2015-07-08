/*****************************************************************************
*   An offset in 2D space.
*
*   @author     Christopher Stock
*   @version    0.0.7
*****************************************************************************/
var LibOffset2D = (function () {
    /*****************************************************************************
    *   Constructs a new offset.
    *
    *   @param  aOffsetX        Horizontal offset amount.
    *   @param  aOffsetY        Vertical   offset amount.
    *****************************************************************************/
    function LibOffset2D(aOffsetX, aOffsetY) {
        /** Offset X. */
        this.iX = 0;
        /** Offset Y. */
        this.iY = 0;
        this.iX = aOffsetX;
        this.iY = aOffsetY;
    }
    return LibOffset2D;
})();
//# sourceMappingURL=LibOffset2D.js.map