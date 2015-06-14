
    /**************************************************************************************
    *   Contains the project history with all current and completed version information.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    **************************************************************************************/
    class MfgVersion
    {
        /** The project's version v.0.0.6. */
        private     static      V_0_0_6                 :LibVersion         = new LibVersion( "0.0.6", "NEW_FEATURES",  "[IN PROGRESS]",                "" );
        /** The project's version v.0.0.5. */
        private     static      V_0_0_5                 :LibVersion         = new LibVersion( "0.0.5", "NEW_PHYSICS",   "11.06.2015, 23:47:27 GMT+1",   "Completed 1px-collision system. Clipped debug-collision-indicator-size to width or height. Fixed the moving bug if multiple reluctant blocks are pushed. Fixed reluctant chained collision bugs. Improved debug log output for collision system. Improved physical engine for pushing paired reluctant blocks with different lines by ORDERING the walls according to their distance. Fixed physical bug on pushing a reluctant block to the wall. Outsourced 'getAllForeignCollidableGameObjects' to MfgLevel. Fixed reluctant walls being able to pick up items. Replaced 'handleItemCollisions()' and 'isReluctant()' with different LibCollisionPlans. MfgGameObjectDebug to lib. MfgCamera to lib. Fixed physical bug on pushing a reluctant while pushing a solid wall. CLIP the collision information to only one single edge ( moving direction! ) Outsourced collision handling code to MfgGameObjectCollision. Solved pushing reluctant blocks. Basics for reluctant walls. Added animation system for walls. Move all debug information for the game object into a separate class. Improve collision debug indication into all four directions? Default level bounding walls. Set player startup-position on lowest level position." );
        /** The project's version v.0.0.4. */
        private     static      V_0_0_4                 :LibVersion         = new LibVersion( "0.0.4", "GAME_ENGINE",   "20.05.2015, 21:53:17 GMT+1",   "Create gravity. Created parent glass MfgGameObject. Dismissed: Find foreach loop. Created new package folders. Extractd enum LibDirection. Completed advanced collision system that aims in all four directions." );
        /** The project's version v.0.0.3. */
        private     static      V_0_0_3                 :LibVersion         = new LibVersion( "0.0.3", "UNCHAINED",     "19.05.2015, 21:57:12 GMT+1",   "Extractd ALL library sources. Extractd LibMainThread. Dismissed: Turn MfgGame to an instance. Moved ImageSystem and SoundSystem-instance to MfgGame. Implemented LibPoint2D and LibDimension2D in LibRect2D. Let MfgCamera use class LibOffset2D. Extract LibSoundSystem! Renamed LibImageSystem! i prefix for MfgLevel members. Removed MfgLevel.instance. Added scrollbar support for smaller displays. Solved code inspection. Create dynamic sound system that can manage infinite sound clips. Outsourced all RGB color values to LibUI. Created canvas tag dynamically. Created own sound class. Completed LibKeySystem. Improved key system for ALL keycodes. Pruned HTML audio tag. Created string/timestamp-format class and use it in every output. Outsourced all lib debug messages. Extract LibVersion. Removed exported modules and require.js. Splitted former module 'MfgIO'. Splitted former module 'GameCore'." );
        /** The project's version v.0.0.2. */
        private     static      V_0_0_2                 :LibVersion         = new LibVersion( "0.0.2", "PACKAGED",      "18.05.2015, 11:28:12 GMT+1",   "Extract LibSprite. Extracted and implemented LibDebug. Extract image loading and managing system. Setup sin/cos functionality. Completed documentation for ALL variables and methods. Create MfgVersion. Moved all color values to settings class. Extracted MfgMath to lib. Extracted MfgDrawing to lib. Pruned MfgInit. Created lib class and instanced handling for MfgCanvas. Created lib class for Rect2D. Pruned '_references'. Moved all files to a suitable package structure." );
        /** The project's version v.0.0.1. */
        private     static      V_0_0_1                 :LibVersion         = new LibVersion( "0.0.1", "GIRLSDAY",      "30.04.2015, 17:18:34 GMT+1",   "Solved module usage. Simplified file-references/import-system via _references.ts. Refactor MfgPlayer. Implemented suitable images. Player now manages a sprite instead of an image. Reimplemented the Sprite system. Pruned block class. Implement horizontal and vertical scrolling. Improve parallax scrolling for 2nd background. Extract parallax scrolling to function in order to support various bg layers. Converted all classes to TypeScript." );

        /** The project's current version. */
        public      static      CURRENT_VERSION         :LibVersion         = MfgVersion.V_0_0_6;
    }
