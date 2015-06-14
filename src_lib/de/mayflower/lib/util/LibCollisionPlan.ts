
    /*****************************************************************************
    *   Specifies all possible ways how a solution should be cleared.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    enum LibCollisionPlan
    {
        /** Collided rectangle does not move back on being collided. */
        SOLID,

        /** Collided rectangle moves back on being collided. */
        RELUCTANT,

        /** Collided rectangle vanishs on being collided. */
        VANISHING,
    }
