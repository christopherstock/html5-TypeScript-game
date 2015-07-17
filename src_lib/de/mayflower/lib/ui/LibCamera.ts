
    /*****************************************************************************
    *   Manages the camera that handles the scrolling part.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibCamera
    {
        /** Current camera offset. */
        public                  iOffset             :LibOffset2D            = null;

        /*****************************************************************************
        *   Constructs a new camera.
        *****************************************************************************/
        public constructor()
        {
            this.iOffset = new LibOffset2D( 0, 0 );
        }

        /*****************************************************************************
        *   Updates the singleton instance of the camera by reassigning
        *   it's horizontal and vertical offset.
        *****************************************************************************/
        public update
        (
            levelWidth:number,
            levelHeight:number,
            canvasWidth:number,
            canvasHeight:number,
            subject:LibShape2D
        )
        {
            //calculate scroll-x-offset so camera is centered to player
            this.iOffset.iX = subject.iAnchor.iX - canvasWidth / 2 + subject.iSize.iWidth / 2;
            //clip camera-x to level bounds
            if ( this.iOffset.iX < 0                        ) this.iOffset.iX = 0;
            if ( this.iOffset.iX > levelWidth - canvasWidth ) this.iOffset.iX = levelWidth - canvasWidth;

            //calculate scroll-y-offset so camera is centered to player
            this.iOffset.iY = subject.iAnchor.iY - canvasHeight / 2 + subject.iSize.iHeight / 2;
            //clip camera-y to level bounds
            if ( this.iOffset.iY < 0                          ) this.iOffset.iY = 0;
            if ( this.iOffset.iY > levelHeight - canvasHeight ) this.iOffset.iY = levelHeight - canvasHeight;
        }
    }
