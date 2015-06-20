
    /*****************************************************************************
    *   Specifies all possible ways how a solution should be cleared.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    enum MfgCollisionPlan
    {
        /** Collided rectangle does not move back on being collided. */
        SOLID_ALL,

        /** Collided rectangle does not move back on being collided but will only collide on moving down. */
        SOLID_TOP,

        /** Collided rectangle moves back on being collided. */
        RELUCTANT,

        /** Collided rectangle vanishs on being collided. */
        VANISHING,
    }
