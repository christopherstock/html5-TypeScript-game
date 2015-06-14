
    /*****************************************************************************
    *   Manages the game logic.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgGame
    {
        /** The canvas being used by the game. */
        public          static          canvas              :LibCanvas                      = null;
        /** The key system being used. */
        public          static          keySystem           :LibKeySystem                   = null;
        /** The image loading system. */
        public          static          imageSystem         :LibImageSystem                 = null;
        /** The sound loading system. */
        public          static          soundSystem         :LibSoundSystem                 = null;
        /** The current active level instance. */
        public          static          level               :MfgLevel                       = null;
        /** The game loop mechanism. */
        public          static          mainThread          :LibMainThread                  = null;
        /** The camera being used. */
        public          static          camera              :LibCamera                      = null;

        /*****************************************************************************
        *   Inits this app from scratch.
        *****************************************************************************/
        public static init()
        {
            //init canvas and append it's tag to the HTML page body
            MfgGame.canvas = new LibCanvas(
                MfgSettings.CANVAS_WIDTH,
                MfgSettings.CANVAS_HEIGHT,
                MfgDebug.canvas
            );
            document.body.appendChild( MfgGame.canvas.getCanvasTag() );

            //attach listeners for keys and pointer
            MfgGame.keySystem = new LibKeySystem( MfgDebug.key );

            //load all images
            MfgGame.imageSystem = new LibImageSystem(
                MfgImage.FILE_NAMES,
                MfgGame.initWhenImagesAreComplete,
                MfgDebug.imageLoader
            );
        }

        /*****************************************************************************
        *   This method is invoked when all images are loaded
        *   and will initialize the remaining stuff.
        *****************************************************************************/
        private static initWhenImagesAreComplete()
        {
            //init sprites
            MfgSprite.init();

            //load all sounds
            MfgGame.soundSystem = new LibSoundSystem(
                MfgSound.FILE_NAMES
            );
            if ( !MfgSettings.DEBUG_MUTE ) MfgGame.soundSystem.playSound( MfgSound.SOUND_BG_STICKERBUSH_SYMPHONY );

            //init a new level
            MfgGame.level = new MfgLevel();

            //init the camera
            MfgGame.camera = new LibCamera();

            //start main thread
            MfgGame.mainThread = new LibMainThread( MfgGame.tick, MfgSettings.THREAD_DELAY );
            MfgGame.mainThread.start();
        }

        /*****************************************************************************
        *   Calculates the game logic for one tick.
        *****************************************************************************/
        private static tick()
        {
            //reset player and walls debug info
            MfgGame.level.unsetAllCollisionIndicators();

            //render game
            MfgGame.render();

            //paint game
            MfgGame.draw();
        }

        /*****************************************************************************
        *   Renders the current game scene.
        *****************************************************************************/
        private static render()
        {
            MfgGame.level.render();
        }

        /*****************************************************************************
        *   Draws the current game frame.
        *****************************************************************************/
        private static draw()
        {
            //update camera
            MfgGame.camera.update
            (
                MfgGame.level.getSize().iWidth,
                MfgGame.level.getSize().iHeight,
                MfgGame.canvas.getWidth(),
                MfgGame.canvas.getHeight(),
                MfgGame.level.getPlayer().iRect
            );

            //clear screen
            LibDrawing.fillCanvas
            (
                MfgGame.canvas,
                MfgSettings.COLOR_SCREEN_BG
            );

            //draw level
            MfgGame.level.draw( MfgGame.camera );
        }
    }
