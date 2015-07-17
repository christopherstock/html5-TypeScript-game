
    /*****************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Review feature 'player auto gap' - fix endless recursion on moving reluctant triangle right!
    *   TODO ASAP   Buggy ascending on reluctant right-triangle?
    *   TODO ASAP   Collision indication for triangles.
    *   TODO ASAP   Sticky blocks ( e.g. horizontal moving platforms ).
    *   TODO INIT   New game object class Enemy.
    *   TODO WEAK   Circle shapes + collision detection?
    *   TODO WEAK   Different sprites for different situations and actions.
    *
    *   DONE        Refactored mfg-packages and lib.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class Mfg
    {
        /*****************************************************************************
        *   This method is invoked when the application starts.
        *****************************************************************************/
        public static main():void
        {
            //acclaim debug console
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
