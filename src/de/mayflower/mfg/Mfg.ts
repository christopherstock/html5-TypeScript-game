
    /*****************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO HIGH   Animated walls.
    *   TODO HIGH   Single trigonometry-calculations of start and end-point for animated walls.
    *   TODO HIGH   Invoke the move actions when the wall is moving!
    *   TODO INIT   Sticky blocks ( horizontal platforms ).
    *   TODO LOW    Support ascending / descending walls.
    *   TODO WEAK   Collision system from rects to convex tetragons?
    *
    *   DONE        Pruned LibCollisionInfo.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class Mfg
    {
        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            //acclaim
            MfgDebug.acclaim.log( MfgSettings.TITLE );

            //init game engine
            MfgGame.init();
        }
    }

    /*****************************************************************************
    *   This is the application's point of entry.
    *****************************************************************************/
    window.onload = function()
    {
        //invoke main method
        Mfg.main();
    };

    /*****************************************************************************
    *   This is the application's point of termination.
    *****************************************************************************/
    window.onunload = function()
    {
    };
