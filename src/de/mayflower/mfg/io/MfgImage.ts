
    /*****************************************************************************
    *   Represents the image system that handles all images being used by the app.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgImage
    {
        /** The image for the 'player default' sprite. */
        public      static      PLAYER_DEFAULT      :string                     = MfgSettings.PATH_IMAGE + "player/default.png";
        /** The image for the 'player standing left' sprite. */
        public      static      PLAYER_STAND_LEFT   :string                     = MfgSettings.PATH_IMAGE + "player/standLeft.png";
        /** The image for the 'player standing right' sprite. */
        public      static      PLAYER_STAND_RIGHT  :string                     = MfgSettings.PATH_IMAGE + "player/standRight.png";
        /** The image for the 'player walking left' sprite. */
        public      static      PLAYER_WALK_LEFT    :string                     = MfgSettings.PATH_IMAGE + "player/walkLeft.png";
        /** The image for the 'player walking right' sprite. */
        public      static      PLAYER_WALK_RIGHT   :string                     = MfgSettings.PATH_IMAGE + "player/walkRight.png";

        /** The image containg the layer with index 0 for the level background. */
        public      static      BG_LAYER_0          :string                     = MfgSettings.PATH_IMAGE + "bg/layer0.jpg";
        /** The image containg the layer with index 1 for the level background. */
        public      static      BG_LAYER_1          :string                     = MfgSettings.PATH_IMAGE + "bg/layer1.png";

        /** The image containg the sprite for the mayflower-logo item. */
        public      static      ITEM_MF_LOGO        :string                     = MfgSettings.PATH_IMAGE + "item/mf-logo.png";

        /** This array contains all filenames of all images that shall be loaded. */
        public      static      FILE_NAMES          :Array<string>              =
        [
            MfgImage.PLAYER_DEFAULT,
            MfgImage.PLAYER_STAND_LEFT,
            MfgImage.PLAYER_STAND_RIGHT,
            MfgImage.PLAYER_WALK_LEFT,
            MfgImage.PLAYER_WALK_RIGHT,

            MfgImage.BG_LAYER_0,
            MfgImage.BG_LAYER_1,

            MfgImage.ITEM_MF_LOGO
        ];
    }
