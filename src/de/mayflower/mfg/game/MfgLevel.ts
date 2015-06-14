
    /*****************************************************************************
    *   Represents a level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgLevel
    {
        /** The player instance. */
        private                     iPlayer         :MfgPlayer                          = null;
        /** All items that can be picked up. */
        private                     iItems          :Array<MfgItem>                     = null;
        /** All walls in the level. */
        private                     iWalls          :Array<MfgWall>                     = null;

        /** The level size. */
        private                     iSize           :LibDimension2D                     = null;

        /*****************************************************************************
        *   Creates a new level instance.
        *****************************************************************************/
        public constructor()
        {
            //set level bounds
            this.iSize = new LibDimension2D
            (
                MfgSettings.LEVEL_WIDTH,
                MfgSettings.LEVEL_HEIGHT
            );

            //create walls
            this.createWalls();

            //create items
            this.createItems();

            //create player instance
            this.createPlayer();
        }

        /*****************************************************************************
        *   Inits the player for this level.
        *****************************************************************************/
        private createPlayer()
        {
            this.iPlayer = new MfgPlayer();

            //set player startup position
            this.setPlayerStartupPosition();
        }

        /*****************************************************************************
        *   Assigns the startup position for the player.
        *   The player will be assigned on a fixed position.
        *****************************************************************************/
        private setPlayerStartupPosition()
        {
            //set fixed positions
            this.iPlayer.iRect.iAnchor.iX = 100;
            this.iPlayer.iRect.iAnchor.iY = this.iSize.iHeight - this.iPlayer.iRect.iSize.iHeight;
        }

        /*****************************************************************************
        *   Inits all walls for this level.
        *****************************************************************************/
        private createWalls()
        {
            //initialize the outer level bounds
            this.iWalls =
            [

                new MfgWall( 0,                 -1,                     this.iSize.iWidth,  1,                  false, null ),
                new MfgWall( 0,                 this.iSize.iHeight,     this.iSize.iWidth,  1,                  false, null ),
                new MfgWall( -1,                0,                      1,                  this.iSize.iHeight, false, null ),
                new MfgWall( this.iSize.iWidth, 0,                      1,                  this.iSize.iHeight, false, null ),

            ];

            switch ( 2 )
            {
                case 1:
                {
                    //solid walls
                    this.iWalls.push( new MfgWall( 455, 1395, 100, 25, false, null ) );
                    this.iWalls.push( new MfgWall( 555, 1395, 300, 25, false, null ) );
                    this.iWalls.push( new MfgWall( 955, 1395, 250, 25, false, null ) );

                    //reluctant walls
                    this.iWalls.push( new MfgWall( 305, 1525, 75,  10, true,  null ) );
                    this.iWalls.push( new MfgWall( 305, 1535, 75,  10, true,  null ) );
                    this.iWalls.push( new MfgWall( 305, 1545, 75,  10, true,  null ) );
                    this.iWalls.push( new MfgWall( 305, 1555, 75,  10, true,  null ) );
                    this.iWalls.push( new MfgWall( 305, 1450, 75,  75, true,  null ) );
                    this.iWalls.push( new MfgWall( 380, 1390, 75,  75, true,  null ) );

                    //small reluctant walls ..
                    this.iWalls.push( new MfgWall( 0,   1525, 5,   75, true,  null ) );
                    this.iWalls.push( new MfgWall( 5,   1520, 5,   75, true,  null ) );
                    this.iWalls.push( new MfgWall( 0,   20,   75,  5,  true,  null ) );
                    this.iWalls.push( new MfgWall( 0,   30,   75,  5,  true,  null ) );

                    break;
                }

                case 2:
                {
                    //solid walls
                    this.iWalls.push( new MfgWall( 200, 1525, 75,  75, false, new LibAnimationLinear( 0 ) ) );

                    //reluctant walls
                    this.iWalls.push( new MfgWall( 500, 1550, 50,  50, true,  null ) );


                    break;
                }
            }

            MfgDebug.wall.log( "Created walls: [" + this.iWalls.length + "]" );
        }

        /*****************************************************************************
        *   Inits all items for this level.
        *****************************************************************************/
        private createItems()
        {
            this.iItems = Array<MfgItem>();
            for ( var i:number = 0; i < MfgSettings.DEBUG_ITEM_COUNT; ++i )
            {
                this.iItems.push
                (
                    new MfgItem
                    (
                        LibMath.getRandomInt( 0, this.iSize.iWidth  - MfgSprite.ITEM_MF_LOGO.iFrameWidth  ),
                        LibMath.getRandomInt( 0, this.iSize.iHeight - MfgSprite.ITEM_MF_LOGO.iFrameHeight )
                    )
                );
            }

            MfgDebug.item.log( "Created items: [" + this.iItems.length + "]" );
        }

        /*****************************************************************************
        *   Draws the level.
        *
        *   @param  camera
        *****************************************************************************/
        public draw( camera:LibCamera )
        {
            //draw bg
            this.drawLevelBg( camera );

            //draw player
            this.iPlayer.draw( camera );

            //draw items
            for ( var i:number = 0; i < this.iItems.length; ++i )
            {
                this.iItems[ i ].draw( camera );
            }
            MfgSprite.ITEM_MF_LOGO.nextTick();

            //draw walls
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                this.iWalls[ i ].draw( camera );
            }
        }

        /*****************************************************************************
        *   Draws the bg using parallax scrolling.
        *
        *   @param  camera
        *****************************************************************************/
        private drawLevelBg( camera:LibCamera )
        {
            //draw bg image
            this.drawParallaxBg( MfgGame.imageSystem.getImage( MfgImage.BG_LAYER_0 ), camera, 0.8 );

            //draw middle layer
            this.drawParallaxBg( MfgGame.imageSystem.getImage( MfgImage.BG_LAYER_1 ), camera, 0.6 );
        }

        /*****************************************************************************
        *   Draws a parallax scrolling bg image.
        *
        *   @param  image   The image to draw into the bg.
        *   @param  camera  The current camera instance.
        *   @param  alpha   The alpha value for the image to draw.
        *****************************************************************************/
        private drawParallaxBg( image:HTMLImageElement, camera:LibCamera, alpha:number )
        {
            var imgWidth     =     image.width;
            var imgHeight    =     image.height;

            LibDrawing.drawImage
            (
                MfgGame.canvas.getContext(),
                image,
                0 - ( imgWidth  - MfgGame.canvas.getWidth()  ) * camera.iOffset.iX / ( this.iSize.iWidth  - MfgGame.canvas.getWidth()  ),
                0 - ( imgHeight - MfgGame.canvas.getHeight() ) * camera.iOffset.iY / ( this.iSize.iHeight - MfgGame.canvas.getHeight() ),
                alpha
            );
        }

        /*****************************************************************************
        *   Renders the current level tick.
        *****************************************************************************/
        public render()
        {
            //animate all walls
            this.handleWallAnimations();

            //handle player keys
            this.iPlayer.handlePlayerKeys();

            //handle gravity
            if ( !MfgSettings.DEBUG_DISABLE_GRAVITY )
            {
                this.handleGravity();
            }
        }

        /*****************************************************************************
        *   Handles the animations for all walls.
        *****************************************************************************/
        private handleWallAnimations()
        {
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                this.iWalls[ i ].tick();
            }
        }

        /*****************************************************************************
        *   Handles the gravity on all affected GameObjects.
        *****************************************************************************/
        private handleGravity()
        {
            //affect gravity on the player
            this.iPlayer.moveWithCollisionCheck( LibDirection.DOWN, MfgSettings.GRAVITY );



            //and on all other game-objects being capable of gravity ...



        }

        /*****************************************************************************
        *   Returns the level bounds.
        *
        *   @return This level's dimensions.
        *****************************************************************************/
        public getSize():LibDimension2D
        {
            return this.iSize;
        }

        /*****************************************************************************
        *   Returns the player instance.
        *
        *   @return This level's player instance.
        *****************************************************************************/
        public getPlayer():MfgPlayer
        {
            return this.iPlayer;
        }

        /*****************************************************************************
        *   Delivers all collidable game objects of the level, skipping the own instance.
        *
        *   @return An array holding all game objects of the current level.
        *           The own game object is filtered.
        *****************************************************************************/
        public getAllForeignCollidableGameObjects( movedGameObject:MfgGameObject ):Array<MfgGameObject>
        {
            var ret:Array<MfgGameObject> = [];

            //add all walls
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                //skip own game object
                if ( this.iWalls[ i ] != movedGameObject )
                {
                    ret.push( this.iWalls[ i ] );
                }
            }

            //add all items ( only for the player )
            if ( movedGameObject instanceof MfgPlayer )
            {
                for ( var i:number = 0; i < this.iItems.length; ++i )
                {
                    //only non-picked items
                    if ( !this.iItems[ i ].iPickedUp )
                    {
                        ret.push( this.iItems[ i ] );
                    }
                }
            }

            //add the player
            if ( this.iPlayer != movedGameObject )
            {
                ret.push( this.iPlayer );
            }

            return ret;
        }

        /*****************************************************************************
        *   Unflags all collision indicators for all game objects.
        *****************************************************************************/
        public unsetAllCollisionIndicators():void
        {
            this.iPlayer.iDebugCollision.unsetCollisionIndicators();
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                this.iWalls[ i ].iDebugCollision.unsetCollisionIndicators();
            }
        }
    }
