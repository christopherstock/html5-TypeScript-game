
    /*****************************************************************************
    *   The debug system, specifying switchable debug groups
    *   that generate output to the screen console.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgDebug
    {
        /** A primal debug group. */
        public      static  bugfix                      :LibDebug                       = new LibDebug( true    && MfgSettings.MODE == MfgSettings.MODE_DEBUG );

        /** The debug group for acclaiming messages. */
        public      static  acclaim                     :LibDebug                       = new LibDebug( true    && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for the canvas system. */
        public      static  canvas                      :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for the image system. */
        public      static  imageLoader                 :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for the key system. */
        public      static  key                         :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for wall handling. */
        public      static  wall                        :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for item handling. */
        public      static  item                        :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for managing sounds. */
        public      static  sound                       :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
        /** The debug group for the collision system. */
        public      static  collision                   :LibDebug                       = new LibDebug( false   && MfgSettings.MODE == MfgSettings.MODE_DEBUG );
    }
