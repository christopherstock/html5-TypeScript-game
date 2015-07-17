
    /*****************************************************************************
    *   Loads and manages all desired images.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibImageSystem
    {
        /** All filenames. */
        private                 iFileNames          :Array<string>              = [];

        /** Counts the number of successful loaded images. */
        private                 iLoadedCount        :number                     = 0;

        /** This array contains all loaded {@link HTMLImageElement} objects, indexed by filename. */
        private                 iLoadedImages       :Array<HTMLImageElement>    = [];

        /** The callback function that is being invoked when all images are loaded. */
        private                 iOnAllImagesLoaded  :any                        = null;

        /** The debug context. */
        private                 iDebug              :LibDebug                   = null;

        constructor( fileNames:Array<string>, aCallbackFunction:any, aDebug:LibDebug )
        {
            this.iFileNames         = fileNames;
            this.iOnAllImagesLoaded = aCallbackFunction;
            this.iDebug             = aDebug;

            this.loadImages();
        }

        private loadImages()
        {
            //browse all filenames
            for ( var i = 0; i < this.iFileNames.length; ++i )
            {
                this.iLoadedImages[ this.iFileNames[ i ] ] = this.loadImage( this.iFileNames[ i ] );
            }
        }

        /*****************************************************************************
         *   Loads one single image with the specified filename.
         *
         *   @param  filename   The filename of this image to load.
         *   @return             The unloaded image object.
         *****************************************************************************/
        private loadImage( filename:string ):HTMLImageElement
        {
            var instance:LibImageSystem = this;

            var img                     = new Image();
            img.src                     = filename;
            img.onload                  = function()
            {
                instance.onImageLoaded(instance);
            };

            return img;
        }

        /*****************************************************************************
         *   This function is invoked each time <b>one</b> image has been fully loaded.
         *****************************************************************************/
        private onImageLoaded( passing:LibImageSystem )
        {
            ++this.iLoadedCount;
            this.iDebug.log( "loaded imgage [" + this.iLoadedCount + "] / [" + this.iFileNames.length + "]" );

            if ( this.iLoadedCount == this.iFileNames.length )
            {
                this.iDebug.log( "All images have been loaded" );

                //return to initialization
                this.iOnAllImagesLoaded();
            }
        }

        /*****************************************************************************
         *   Delivers the image with the specified filename.
         *
         *   @param  id  The filename of the image to return.
         *   @return     The image object with the specified filename.
         *****************************************************************************/
        public getImage( id:string ):HTMLImageElement
        {
            return this.iLoadedImages[ id ];
        }
    }
