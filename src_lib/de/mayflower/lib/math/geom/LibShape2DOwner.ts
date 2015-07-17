
    /*****************************************************************************
    *   Owners of a shape should implement this interface.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    interface LibShape2DOwner
    {
        /*****************************************************************************
        *   Delivers the shape that is owned by the implementing owner.
        *
        *   @return The shape of this owner.
        *****************************************************************************/
        getShape():LibShape2D;
    }
