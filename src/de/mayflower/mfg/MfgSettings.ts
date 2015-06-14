
    /*****************************************************************************
    *   Specifies all adjustments and balancings for the application.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgSettings
    {
        /** The delay in ms between each thread tick. */
        public      static      THREAD_DELAY                                :number             = 40;

        /** The debug constant that represents the 'RELEASE'-mode. */
        public      static      MODE_RELEASE                                :number             = 0;
        /** The debug constant that represents the 'DEBUG'-mode. */
        public      static      MODE_DEBUG                                  :number             = 1;
        /** Determines the app's operation mode. */
        public      static      MODE                                        :number             = MfgSettings.MODE_DEBUG;

        /** The application's internal name. */
        public      static      TITLE                                       :string             = "HTML5 TypeScript MfgGame, (c) 2015 Mayflower GmbH, v. [" + MfgVersion.CURRENT_VERSION.getVersionDescriptor() + "]";

        /** The desired canvas width. */
        public      static      CANVAS_WIDTH                                :number             = 700;
        /** The desired canvas height. */
        public      static      CANVAS_HEIGHT                               :number             = 400;

        /** The player's speed in pixels per tick for movement operations. */
        public      static      PLAYER_SPEED_MOVE                           :number             = 15;

        /** The falling speed in pixels per tick. */
        public      static      GRAVITY                                     :number             = 10;

        /** Disables gravity and enables direct vertical movements. */
        public      static      DEBUG_DISABLE_GRAVITY                       :boolean            = true;

        /** The desired level width. */
        public      static      LEVEL_WIDTH                                 :number             = 2560;
        /** The desired level height. */
        public      static      LEVEL_HEIGHT                                :number             = 1600;

        /** The relative path where all images the app makes use of reside. */
        public      static      PATH_IMAGE                                  :string             = "res/image/";
        /** The relative path where all images the app makes use of reside. */
        public      static      PATH_SOUND                                  :string             = "res/sound/";

        /** The color for the canvas background. */
        public      static      COLOR_SCREEN_BG                             :string             = LibUI.COLOR_WHITE_OPAQUE;

        /** Disables all sounds. */
        public      static      DEBUG_MUTE                                  :boolean            = true;
        /** Hides all image sprites. */
        public      static      DEBUG_HIDE_SPRITES                          :boolean            = true;

        /** The number of items to show on the level. */
        public      static      DEBUG_ITEM_COUNT                            :number             = 0;

        /** Specifies if a debug rect shall be drawn over the player. */
        public      static      DEBUG_DRAW_RECT_PLAYER                      :boolean            = true;
        /** Specifies if a debug rect shall be drawn over the walls. */
        public      static      DEBUG_DRAW_RECT_WALL                        :boolean            = true;
        /** Specifies if a debug rect shall be drawn over the items. */
        public      static      DEBUG_DRAW_RECT_ITEM                        :boolean            = true;

        /** The width of the stroke for item debug rects. */
        public      static      DEBUG_STROKE_SIZE                           :number             = 1;
        /** The width of the debug collision indicator. */
        public      static      DEBUG_COLLISION_INDICATOR_SIZE              :number             = 10;

        /** The color for the debug collision indicator. */
        public      static      DEBUG_COLOR_RECT_COLLISION_INDICATOR        :string             = LibUI.COLOR_RED_TRANSLUCENT_50;

        /** The color for the player's debug rect's border. */
        public      static      DEBUG_COLOR_RECT_PLAYER_BORDER              :string             = LibUI.COLOR_YELLOW_OPAQUE;
        /** The color for the player's debug rect's fill. */
        public      static      DEBUG_COLOR_RECT_PLAYER_FILL                :string             = LibUI.COLOR_GREY_TRANSLUCENT_50;

        /** The color for the wall's debug rect's border. */
        public      static      DEBUG_COLOR_RECT_WALL_RELUCTANT_BORDER      :string             = LibUI.COLOR_BLUE_OPAQUE;
        /** The color for the wall's debug rect's border. */
        public      static      DEBUG_COLOR_RECT_WALL_SOLID_BORDER          :string             = LibUI.COLOR_RED_OPAQUE;
        /** The color for the wall's debug rect's fill. */
        public      static      DEBUG_COLOR_RECT_WALL_FILL                  :string             = LibUI.COLOR_GREY_TRANSLUCENT_50;

        /** The color for the item's debug rect's border. */
        public      static      DEBUG_COLOR_RECT_ITEM_BORDER                :string             = LibUI.COLOR_ORANGE_OPAQUE;
        /** The color for the item's debug rect's fill. */
        public      static      DEBUG_COLOR_RECT_ITEM_FILL                  :string             = LibUI.COLOR_GREY_TRANSLUCENT_50;
    }
