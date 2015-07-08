
    /*****************************************************************************
    *   Represents a colliding wall.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class MfgWall extends MfgGameObject
    {
        /** All game objects being stuck onto the top of this wall. */
        public                  iTopStuckedGameObjects:Array<MfgGameObject>             = null;
        /** Specifies if this wall has a sticky top that can stick on other reluctant game objects. */
        public                  iStickyTop:boolean                                      = false;

        /*****************************************************************************
        *   Creates a wall.
        *
        *   @param  aShape          The shape that represents this wall.
        *   @param  aCollisionPlan  Specifies this wall's behaviour on solving collisions.
        *   @param  aStickyTop      Specifies if this wall's top is sticky.
        *   @param  aAnimations     The animation for this wall. May be <code>null</code> if no animation is requested.
        *****************************************************************************/
        public constructor
        (
            aShape:LibShape2D,
            aCollisionPlan:MfgCollisionPlan,
            aStickyTop:boolean,
            aAnimations:Array<LibAnimation>
        )
        {
            super
            (
                aShape,
                null,
                aAnimations,
                aCollisionPlan,
                new LibCollisionDebug
                (
                    MfgDebugSettings.DEBUG_DRAW_RECT_WALL,
                    (
                            aCollisionPlan == MfgCollisionPlan.RELUCTANT
                        ?   MfgDebugSettings.DEBUG_COLOR_RECT_WALL_RELUCTANT_BORDER
                        :
                                aCollisionPlan == MfgCollisionPlan.SOLID_ALL
                            ?   MfgDebugSettings.DEBUG_COLOR_RECT_WALL_SOLID_ALL_BORDER
                            :   MfgDebugSettings.DEBUG_COLOR_RECT_WALL_SOLID_TOP_BORDER
                    ),
                    MfgDebugSettings.DEBUG_COLOR_RECT_WALL_FILL,
                    MfgDebugSettings.DEBUG_COLOR_COLLISION_INDICATOR,
                    MfgDebugSettings.DEBUG_SIZE_COLLISION_INDICATOR,
                    MfgDebugSettings.DEBUG_SIZE_STROKE
                )
            );

            this.iStickyTop = aStickyTop;
        }
    }
