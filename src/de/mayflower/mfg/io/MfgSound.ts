
    /*****************************************************************************
    *   Manages all sound effects.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class MfgSound
    {
        /** The sound for the 'background - stickerbrush symphony'. */
        public      static      SOUND_BG_STICKERBUSH_SYMPHONY       :string                 = MfgSettings.PATH_SOUND + "bg1.mp3";
        /** The sound for the 'effect - bling'. */
        public      static      SOUND_FX_BLING                      :string                 = MfgSettings.PATH_SOUND + "fx1.mp3";

        /** This array contains all filenames of all sounds that shall be loaded. */
        public      static      FILE_NAMES                          :Array<string>          =
        [
            MfgSound.SOUND_BG_STICKERBUSH_SYMPHONY,
            MfgSound.SOUND_FX_BLING
        ];
    }
