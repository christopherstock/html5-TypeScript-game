
    /*****************************************************************************
    *   Specifies all adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class MfgSettings
    {
        /** Determines the app's operation mode. */
        public      static      MODE                                        :number             = MfgDebugSettings.MODE_DEBUG;

        /** The application's internal name. */
        public      static      TITLE                                       :string             = "HTML5 TypeScript MfgGame, (c) 2015 Mayflower GmbH, v. [" + MfgVersion.CURRENT_VERSION.getVersionDescriptor() + "]";

        /** The desired canvas width. */
        public      static      CANVAS_WIDTH                                :number             = 700;
        /** The desired canvas height. */
        public      static      CANVAS_HEIGHT                               :number             = 400;

        /** The delay in ms between each thread tick. */
        public      static      THREAD_DELAY                                :number             = 40;

        /** Enables conceptional feature 'player auto gap'. */
        public      static      FEATURE_PLAYER_AUTO_GAP                     :boolean            = false;

        /** The player's speed in pixels per tick for movement operations. */
        public      static      PLAYER_SPEED_MOVE                           :number             = 15;

        /** The falling speed in pixels per tick. */
        public      static      GRAVITY                                     :number             = 10;

        /** The auto-ascending gap distance for the player. */
        public      static      PLAYER_AUTO_GAP_Y                           :number             = 10;

        /** The desired level width. */
        public      static      LEVEL_WIDTH                                 :number             = 2560;
        /** The desired level height. */
        public      static      LEVEL_HEIGHT                                :number             = 1600;

        /** The color for the canvas background. */
        public      static      COLOR_SCREEN_BG                             :string             = LibUI.COLOR_WHITE_OPAQUE;

        /** The relative path where all images the app makes use of reside. */
        public      static      PATH_IMAGE                                  :string             = "res/image/";
        /** The relative path where all images the app makes use of reside. */
        public      static      PATH_SOUND                                  :string             = "res/sound/";
    }
