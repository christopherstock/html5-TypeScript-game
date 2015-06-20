
    /*****************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Sticky blocks ( e.g. horizontal moving platforms ).
    *   TODO INIT   Support ascending / descending walls. ( Change collision system from rects to convex tetragons? Cut rects across the width/height?
    *   TODO WEAK   New game object class Enemy.
    *
    *   DONE        Improved collision indication by only showing non-solved collisions.
    *   DONE        Fixed reluctant blocks ignoring collisions on solid-top walls.
    *   DONE        Let JS set the document title.
    *   DISMISSED   Draw rectangle lines via drawLine, not via strokeRect.
    *   DONE        Pruned collision plan from lib.
    *   DONE        Created pass-through ('solid-top') walls.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
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
