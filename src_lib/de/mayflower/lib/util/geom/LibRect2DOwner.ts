
    /*****************************************************************************
    *   Owners of a rectangle should implement this interface.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    interface LibRect2DOwner
    {
        /*****************************************************************************
        *   Delivers the rectangle that is owned by the implementing owner.
        *
        *   @return The rectangle of this owner.
        *****************************************************************************/
        getRect():LibRect2D;

    }
