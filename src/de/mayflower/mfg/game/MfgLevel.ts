
    /*****************************************************************************
    *   Represents a level.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
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
            this.iPlayer.iShape.iAnchor.iX = 750;
            this.iPlayer.iShape.iAnchor.iY = this.iSize.iHeight - this.iPlayer.iShape.iSize.iHeight - 0;
        }

        /*****************************************************************************
        *   Inits all walls for this level.
        *****************************************************************************/
        private createWalls()
        {
            //initialize the outer level bounds
            this.iWalls =
            [

                new MfgWall( new LibRect2D( 0,                 -1,                     this.iSize.iWidth,  1 ),                  MfgCollisionPlan.SOLID_ALL, false, null ),
                new MfgWall( new LibRect2D( 0,                 this.iSize.iHeight,     this.iSize.iWidth,  1 ),                  MfgCollisionPlan.SOLID_ALL, false, null ),
                new MfgWall( new LibRect2D( -1,                0,                      1,                  this.iSize.iHeight ), MfgCollisionPlan.SOLID_ALL, false, null ),
                new MfgWall( new LibRect2D( this.iSize.iWidth, 0,                      1,                  this.iSize.iHeight ), MfgCollisionPlan.SOLID_ALL, false, null )

            ];

            switch ( 4 )
            {
                case 1:
                {
                    //solid walls
                    this.iWalls.push( new MfgWall( new LibRect2D( 455, 1295, 100, 25 ), MfgCollisionPlan.SOLID_ALL, false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 555, 1295, 300, 25 ), MfgCollisionPlan.SOLID_ALL, false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 955, 1295, 250, 25 ), MfgCollisionPlan.SOLID_TOP, false, null ) );

                    //reluctant walls
                    this.iWalls.push( new MfgWall( new LibRect2D( 305, 1425, 75,  10 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 305, 1435, 75,  10 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 305, 1445, 75,  10 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 305, 1455, 75,  10 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 305, 1350, 75,  75 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 380, 1290, 75,  75 ), MfgCollisionPlan.RELUCTANT,  false, null ) );

                    //small reluctant walls ..
                    this.iWalls.push( new MfgWall( new LibRect2D( 0,   1525, 5,   75 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 5,   1520, 5,   75 ), MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 0,   20,   75,  5  ),  MfgCollisionPlan.RELUCTANT,  false, null ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 0,   30,   75,  5  ),  MfgCollisionPlan.RELUCTANT,  false, null ) );

                    break;
                }

                case 2:
                {
                    //animated solid wall
                  //this.iWalls.push( new MfgWall( 200, 1225, 75,  75, false, new LibAnimationLinear( 30, 50, 10, 5 ) ) );

                    this.iWalls.push
                    (
                        new MfgWall
                        (
                            new LibRect2D( 200, 1225, 75,  75 ), MfgCollisionPlan.SOLID_ALL, false,
                            [
                                //new LibAnimationSwing( 90, 5, 10, 10, 50, 50 ),

                                new LibAnimationLinear( 90, 20, 20, 5 ),
                                new LibAnimationLinear( 0, 20, 20, 5 )
                            ]
                        )
                    );

                    //reluctant walls
//                    this.iWalls.push( new MfgWall( 500, 1550, 50,  50, true,  null ) );

                    break;
                }

                case 3:
                {
                    this.iWalls.push( new MfgWall( new LibRect2D( 250, 1350, 75,  75 ), MfgCollisionPlan.SOLID_ALL, true,  [ new LibAnimationLinear( 35, 10, 5, 5 ) ] ) );
                    this.iWalls.push( new MfgWall( new LibRect2D( 750, 1350, 75,  75 ), MfgCollisionPlan.SOLID_ALL, false, [ new LibAnimationLinear( 35, 10, 5, 5 ) ] ) );

                    break;
                }

                case 4:
                {
                    this.iWalls.push( new MfgWall( new LibRect2D( 200, 1200, 75,  75 ), MfgCollisionPlan.SOLID_ALL, true,  null ) );
                    this.iWalls.push( new MfgWall( new LibRightTriangle2D( LibRightCorner2D.RIGHT_BOTTOM, 370, 1370, 150,  80 ), MfgCollisionPlan.RELUCTANT, true,  null ) );

                    break;
                }

                case 5:
                {
                    this.iWalls.push( new MfgWall( new LibRect2D( 0, 1500, 500, 100 ), MfgCollisionPlan.SOLID_ALL, true,  null ) );
                    this.iWalls.push( new MfgWall( new LibRightTriangle2D( LibRightCorner2D.LEFT_BOTTOM, 500, 1500, 200, 100 ), MfgCollisionPlan.SOLID_ALL, true,  null ) );
                    this.iWalls.push( new MfgWall( new LibRightTriangle2D( LibRightCorner2D.RIGHT_BOTTOM, 850, 1500, 200, 100 ), MfgCollisionPlan.SOLID_ALL, true,  null ) );




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
            for ( var i:number = 0; i < MfgDebugSettings.DEBUG_ITEM_COUNT; ++i )
            {
                this.iItems.push
                (
                    new MfgItem
                    (
                        LibMath.getRandomInt( 0, this.iSize.iWidth  - MfgSprite.ITEM_MF_LOGO.iFrameWidth  ),
                        LibMath.getRandomInt( 0, this.iSize.iHeight - MfgSprite.ITEM_MF_LOGO.iFrameHeight ),
                        [ new LibAnimationLinear( 120, 10, 10, 5 ) ]
                    )
                );
            }

            MfgDebug.item.log( "Created items: [" + this.iItems.length + "]" );
        }

        /*****************************************************************************
        *   Draws the level.
        *
        *   @param  context The 2d drawing context.
        *   @param  camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( context:CanvasRenderingContext2D, camera:LibCamera )
        {
            //draw bg
            this.drawLevelBg( context, camera );

            //draw player
            this.iPlayer.draw( context, camera );

            //draw items
            for ( var i:number = 0; i < this.iItems.length; ++i )
            {
                this.iItems[ i ].draw( context, camera );
            }
            MfgSprite.ITEM_MF_LOGO.nextTick();

            //draw walls
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                this.iWalls[ i ].draw( context, camera );
            }
        }

        /*****************************************************************************
        *   Draws the bg using parallax scrolling.
        *
        *   @param  context The 2d drawing context.
        *   @param  camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        private drawLevelBg( context:CanvasRenderingContext2D, camera:LibCamera )
        {
            //draw bg image
            this.drawParallaxBg( context, camera, MfgGame.imageSystem.getImage( MfgImage.BG_LAYER_0 ), 0.8 );

            //draw middle layer
            this.drawParallaxBg( context, camera, MfgGame.imageSystem.getImage( MfgImage.BG_LAYER_1 ), 0.6 );
        }

        /*****************************************************************************
        *   Draws a parallax scrolling bg image.
        *
        *   @param  context The 2d drawing context.
        *   @param  camera  The current camera instance.
        *   @param  image   The image to draw into the bg.
        *   @param  alpha   The alpha value for the image to draw.
        *****************************************************************************/
        private drawParallaxBg( context:CanvasRenderingContext2D, camera:LibCamera, image:HTMLImageElement, alpha:number )
        {
            var imgWidth     =     image.width;
            var imgHeight    =     image.height;

            LibDrawing.drawImage
            (
                context,
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
            //render all game objects
            this.renderGameObjects();

            //handle player keys
            this.iPlayer.handlePlayerKeys();

            //handle gravity
            if ( !MfgDebugSettings.DEBUG_DISABLE_GRAVITY )
            {
                this.handleGravity();
            }
        }

        /*****************************************************************************
        *   Renders all game objects.
        *****************************************************************************/
        private renderGameObjects()
        {
            //player
            this.iPlayer.render();

            //walls
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                this.iWalls[ i ].render();
            }

            //items
            for ( var i:number = 0; i < this.iItems.length; ++i )
            {
                this.iItems[ i ].render();
            }
        }

        /*****************************************************************************
        *   Handles the gravity on all affected GameObjects.
        *****************************************************************************/
        private handleGravity()
        {
            //affect gravity on the player
            this.iPlayer.moveWithCollisionCheck( LibDirection2D.DOWN, MfgSettings.GRAVITY );



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
        public getAllForeignCollidableGameObjects( movingGameObject:MfgGameObject, movingDirection:LibDirection2D ):Array<MfgGameObject>
        {
            var ret:Array<MfgGameObject> = [];

            var addWalls:boolean  = false;
            var addItems:boolean  = false;
            var addPlayer:boolean = false;

            if ( movingGameObject instanceof MfgPlayer )
            {
                addWalls = true;
                addItems = true;
            }
            else if ( movingGameObject instanceof MfgWall )
            {
                addWalls  = true;
                addPlayer = true;
            }
            else if ( movingGameObject instanceof MfgItem )
            {
                addPlayer = true;
            }

            //add all walls if desired
            if ( addWalls )
            {
                for ( var i:number = 0; i < this.iWalls.length; ++i )
                {
                    //skip own game object
                    if ( this.iWalls[ i ] != movingGameObject )
                    {
                        ret.push( this.iWalls[ i ] );
                    }
                }
            }

            //add all items if desired
            if ( addItems )
            {
                for ( var i:number = 0; i < this.iItems.length; ++i )
                {
                    //only non-picked items
                    if ( !this.iItems[ i ].iDisabled )
                    {
                        //skip own game object
                        if ( this.iItems[ i ] != movingGameObject )
                        {
                            ret.push( this.iItems[ i ] );
                        }
                    }
                }
            }

            //add the player if desired
            if ( addPlayer )
            {
                //skip own game object
                if ( this.iPlayer != movingGameObject )
                {
                    ret.push( this.iPlayer );
                }
            }

            return ret;
        }

        /*****************************************************************************
        *   Unflags all collision indicators for all game objects.
        *****************************************************************************/
        public unsetAllCollisionIndicators():void
        {
            //player
            this.iPlayer.iCollision.iDebugCollision.unsetCollisionIndicators();

            //all walls
            for ( var i:number = 0; i < this.iWalls.length; ++i )
            {
                this.iWalls[ i ].iCollision.iDebugCollision.unsetCollisionIndicators();
            }

            //all items
            for ( var i:number = 0; i < this.iItems.length; ++i )
            {
                this.iItems[ i ].iCollision.iDebugCollision.unsetCollisionIndicators();
            }
        }
    }
