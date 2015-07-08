
    /*****************************************************************************
    *   The main class contains the application's points of entry and termination.
    *
    *   TODO ASAP   Collision indication for triangles.
    *   TODO WEAK   Circle shapes + collision detection?
    *   TODO ASAP   Sticky blocks ( e.g. horizontal moving platforms ).
    *   TODO HIGH   Refactor MfgGameObjectCollision.
    *   TODO WEAK   New game object class Enemy.
    *
    *   DONE        Implemented reluctancy for triangles.
    *   DONE        Completed seamlessness movement from rectangles to triangles.
    *   DONE        Implemented ascending and descending walls.
    *   DONE        Auto-gap-ascending for the player.
    *   DONE        Implemented Right-sided triangle shapes and the according collision detection.
    *   DONE        Created parent superclass shape2D for geometrical 2D bodies.
    *   DONE        Improved collision indication by only showing non-solved collisions.
    *   DONE        Fixed reluctant blocks ignoring collisions on solid-top walls.
    *   DONE        Let JS set the document title.
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
