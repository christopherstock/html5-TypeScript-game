
    /*****************************************************************************
    *   Represents the 2d drawing surface.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class LibCanvas
    {
        /** The HTML canvas tag that can be added to the website's body. */
        private                         iCanvasTag      :HTMLCanvasElement              = null;

        /** The canvas rendering context. */
        private                         iContext        :CanvasRenderingContext2D       = null;

        /** The referenced debug context. */
        private                         iDebug          :LibDebug                       = null;

        /*****************************************************************************
        *   Inits the canvas.
        *
        *   @param  aTargetWidth    The target width for this canvas to assign.
        *   @param  aTargetHeight   The target height for this canvas to assign.
        *   @param  aDebug          The debug context.
        *****************************************************************************/
        public constructor( aTargetWidth:number, aTargetHeight:number, aDebug:LibDebug )
        {
            //assign debug instance
            this.iDebug             = aDebug;

            //create an HTML canvas element and assign it's dimensions
            this.iCanvasTag         = <HTMLCanvasElement>document.createElement( 'canvas' );
            this.iCanvasTag.width   = aTargetWidth;
            this.iCanvasTag.height  = aTargetHeight;

            //assign paramounts
            this.iContext  = <CanvasRenderingContext2D>this.iCanvasTag.getContext( '2d' );

            //output log message
            this.iDebug.log( "Canvas initialized with dimensions [" + this.iCanvasTag.width + "][" + this.iCanvasTag.height + "]" );
        }

        /*****************************************************************************
        *   Returns the HTML Canvas Tag element.
        *
        *   @return     The HTML-canvas-tag.
        *****************************************************************************/
        public getCanvasTag():HTMLCanvasElement
        {
            return this.iCanvasTag;
        }

        /*****************************************************************************
        *   Returns the canvas' 2D drawing context.
        *
        *   @return     The drawing context for this canvas.
        *****************************************************************************/
        public getContext():CanvasRenderingContext2D
        {
            return this.iContext;
        }

        /*****************************************************************************
        *   Returns the canvas' width.
        *
        *   @return     The width of this canvas in px.
        *****************************************************************************/
        public getWidth():number
        {
            return this.iCanvasTag.width;
        }

        /*****************************************************************************
        *   Returns the canvas' height.
        *
        *   @return     The height of this canvas in px.
        *****************************************************************************/
        public getHeight():number
        {
            return this.iCanvasTag.height;
        }
    }
