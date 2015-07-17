
    /*****************************************************************************
    *   Offers independent drawing functionality for the canvas.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibDrawing
    {
        /*****************************************************************************
        *   Fills the specified canvas with the specified fill color.
        *
        *   @param  canvas  The canvas to fill.
        *   @param  col     A fill color.
        *****************************************************************************/
        public static fillCanvas( canvas:LibCanvas, col:string )
        {
            LibDrawing.fillRect
            (
                canvas.getContext(),
                0,
                0,
                canvas.getWidth(),
                canvas.getHeight(),
                col
            );
        }

        /*****************************************************************************
        *   Strokes a line with the specified points color and size.
        *
        *   @param  ctx         The rendering context.
        *   @param  x1          The start point's x.
        *   @param  y1          The start point's y.
        *   @param  x2          The end point's x.
        *   @param  y2          The end point's y.
        *   @param  col         A stroke color.
        *****************************************************************************/
        public static strokeLine( ctx:CanvasRenderingContext2D, x1:number, y1:number, x2:number, y2:number, col:string )
        {
            ctx.strokeStyle = col;
            ctx.lineWidth   = 1;

            ctx.beginPath();
            ctx.moveTo( x1, y1 );
            ctx.lineTo( x2, y2 );
            ctx.stroke();
        }

        /*****************************************************************************
        *   Draws a rect's stroke with the specified dimensions and color.
        *
        *   @param  ctx         The rendering context.
        *   @param  x           The left  coordinate.
        *   @param  y           The right coordinate.
        *   @param  width       The desired width.
        *   @param  height      The desired height.
        *   @param  col         A stroke color.
        *   @param  strokeSize  The width of the stroke.
        *****************************************************************************/
        public static strokeRect( ctx:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, col:string, strokeSize:number )
        {
            ctx.fillStyle = col;

            ctx.fillRect( x,                      y,                       width,      strokeSize );
            ctx.fillRect( x,                      y,                       strokeSize, height     );
            ctx.fillRect( x,                      y + height - strokeSize, width,      strokeSize );
            ctx.fillRect( x + width - strokeSize, y,                       strokeSize, height     );
        }

        /*****************************************************************************
        *   Fills a polygon of the specified x|y coordinates with the specified fill color.
        *
        *   @param  ctx         The rendering context.
        *   @param  points      All x|y coordinate pairs.
        *   @param  col         A fill color.
        *****************************************************************************/
        public static fillPolygon( ctx:CanvasRenderingContext2D, points:Array<number>, col:string )
        {
            ctx.fillStyle = col;

            ctx.beginPath();

            for ( var i:number = 0; i < points.length; i += 2 )
            {
                if ( i == 0 )
                {
                    ctx.moveTo( points[ i ], points[ i + 1 ] );
                }
                else
                {
                    ctx.lineTo( points[ i ], points[ i + 1 ] );
                }
            }

            ctx.fill();
        }

        /*****************************************************************************
        *   Fills a rect with the specified dimensions and color.
        *
        *   @param  ctx     The rendering context.
        *   @param  x       The left  coordinate.
        *   @param  y       The right coordinate.
        *   @param  width   The desired width.
        *   @param  height  The desired height.
        *   @param  col     A fill color.
        *****************************************************************************/
        public static fillRect( ctx:CanvasRenderingContext2D, x:number, y:number, width:number, height:number, col:string )
        {
            ctx.fillStyle = col;
            ctx.fillRect( x, y, width, height );
        }

        /*****************************************************************************
        *   Draws an image at the specified location with a specified anchor.
        *
        *   @param  ctx         The rendering context
        *   @param  img         The image to draw.
        *   @param  x           Drawing position x.
        *   @param  y           Drawing position y.
        *   @param  alpha       The desired alpha value to draw the image.
        *                       This value has a range of 0.0 to 1.0.
        *****************************************************************************/
        public static drawImage( ctx:CanvasRenderingContext2D, img:HTMLImageElement, x:number, y:number, alpha:number )
        {
            LibDrawing.drawImageScaledClipped( ctx, img, x, y, 0, 0, img.width, img.height, img.width, img.height, alpha );
        }

        /*****************************************************************************
        *   Draws an image at the specified location with a specified anchor
        *   and scales it to the given destiny dimensions.
        *
        *   @param  ctx         The rendering context
        *   @param  img         The image to draw.
        *   @param  destX       Drawing position x.
        *   @param  destY       Drawing position y.
        *   @param  srcX        Clipping position x.
        *   @param  srcY        Clipping position y.
        *   @param  srcWidth    Clipping width.
        *   @param  srcHeight   Clipping height.
        *   @param  destWidth   Destination width.
        *   @param  destHeight  Destination height.
        *   @param  alpha       The desired alpha value to draw the image.
        *                       This value has a range of 0.0 to 1.0.
        *****************************************************************************/
        public static drawImageScaledClipped
        (
            ctx         :CanvasRenderingContext2D,
            img         :HTMLImageElement,
            destX       :number,
            destY       :number,
            srcX        :number,
            srcY        :number,
            srcWidth    :number,
            srcHeight   :number,
            destWidth   :number,
            destHeight  :number,
            alpha       :number
        )
        {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.drawImage( img, srcX, srcY, srcWidth, srcHeight, destX, destY, destWidth, destHeight );
            ctx.restore();
        }
    }
