
    /*****************************************************************************
    *   Manages all debug information for one game object.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibCollisionDebug
    {
        /** Flags if the debug rectangle should be drawn each tick. */
        private         iDrawRect                  :boolean                        = false;
        /** The stroke color for the debug rect. */
        private         iRectColorStroke            :string                         = null;
        /** The fill color for the debug rect. */
        private         iRectColorFill              :string                         = null;
        /** The fill color for the colliding debug rect. */
        private         iRectColorColliding         :string                         = null;

        /** The thickness of the collision indicator edge. */
        private         iCollisionIndicatorSize     :number                         = 0;
        /** The thickness of the rects stroke. */
        private         iStrokeSize                 :number                         = 0;

        /** Indicates if the game object is currently colliding at it's left edge. */
        private         iCollidingLeft              :boolean                        = false;
        /** Indicates if the game object is currently colliding at it's top edge. */
        private         iCollidingTop               :boolean                        = false;
        /** Indicates if the game object is currently colliding at it's right edge. */
        private         iCollidingRight             :boolean                        = false;
        /** Indicates if the game object is currently colliding at it's bottom edge. */
        private         iCollidingBottom            :boolean                        = false;

        /*****************************************************************************
        *   Creates a new game object debug context.
        *
        *   @param  aDrawDebug                  Specifies if a debug rect should be drawn.
        *   @param  aDebugRectColorStroke       The stroke color for the debug rect.
        *   @param  aDebugRectColorFill         The fill color for the debug rect.
        *   @param  aDebugRectColorColliding    The fill color for the colliding debug rect.
        *   @param  aCollisionIndicatorSize     The thickness of the collision indicator edge.
        *   @param  aStrokeSize                 The thickness of the debug rect's stroke.
        *****************************************************************************/
        public constructor
        (
            aDrawDebug:boolean,
            aDebugRectColorStroke:string,
            aDebugRectColorFill:string,
            aDebugRectColorColliding:string,
            aCollisionIndicatorSize:number,
            aStrokeSize:number
        )
        {
            this.iDrawRect               = aDrawDebug;
            this.iRectColorStroke        = aDebugRectColorStroke;
            this.iRectColorFill          = aDebugRectColorFill;
            this.iRectColorColliding     = aDebugRectColorColliding;
            this.iCollisionIndicatorSize = aCollisionIndicatorSize;
            this.iStrokeSize             = aStrokeSize;
        }

        /*****************************************************************************
        *   Draws a debug rectangle over this game object.
        *
        *   @param  context The drawing context.
        *   @param  camera  The camera position to draw this block for.
        *   @param  rect    The debug rect to draw.
        *****************************************************************************/
        public drawDebugRect( context:CanvasRenderingContext2D, camera:LibCamera, rect:LibRect2D )
        {
            //only if the debug flag is enabled for this debug object
            if ( this.iDrawRect )
            {
                //draw debug rect over game object
                LibDrawing.fillRect(   context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, rect.iSize.iHeight, this.iRectColorFill );

                //draw debug indication
                var collisionIndicatorSize:number = 0;
                if ( this.iCollidingLeft   )
                {
                    collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iWidth ? rect.iSize.iWidth : this.iCollisionIndicatorSize );
                    LibDrawing.fillRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, collisionIndicatorSize, rect.iSize.iHeight, this.iRectColorColliding );
                }
                if ( this.iCollidingBottom )
                {
                    collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iHeight ? rect.iSize.iHeight : this.iCollisionIndicatorSize );
                    LibDrawing.fillRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY + rect.iSize.iHeight - collisionIndicatorSize - camera.iOffset.iY, rect.iSize.iWidth, collisionIndicatorSize, this.iRectColorColliding );
                }
                if ( this.iCollidingRight  )
                {
                    collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iWidth ? rect.iSize.iWidth : this.iCollisionIndicatorSize );
                    LibDrawing.fillRect( context, rect.iAnchor.iX + rect.iSize.iWidth - collisionIndicatorSize - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, collisionIndicatorSize, rect.iSize.iHeight, this.iRectColorColliding );
                }
                if ( this.iCollidingTop    )
                {
                    collisionIndicatorSize = ( this.iCollisionIndicatorSize > rect.iSize.iHeight ? rect.iSize.iHeight : this.iCollisionIndicatorSize );
                    LibDrawing.fillRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, collisionIndicatorSize, this.iRectColorColliding );
                }

                //draw rect stroke
                LibDrawing.strokeRect( context, rect.iAnchor.iX - camera.iOffset.iX, rect.iAnchor.iY - camera.iOffset.iY, rect.iSize.iWidth, rect.iSize.iHeight, this.iRectColorStroke, this.iStrokeSize );
            }
        }

        /*****************************************************************************
        *   Sets the collision indicator for the specified direction.
        *
        *   @param  movingDirection The direction to set the collision indicator for.
        *****************************************************************************/
        public setCollisionIndicator( movingDirection:LibDirection )
        {
            switch ( movingDirection )
            {
                case LibDirection.LEFT:
                {
                    this.iCollidingLeft   = true;
                    break;
                }

                case LibDirection.UP:
                {
                    this.iCollidingTop    = true;
                    break;
                }

                case LibDirection.RIGHT:
                {
                    this.iCollidingRight  = true;
                    break;
                }

                case LibDirection.DOWN:
                {
                    this.iCollidingBottom = true;
                    break;
                }
            }
        }

        /*****************************************************************************
         *   Unflags the collision indicators for all directions.
         *****************************************************************************/
        public unsetCollisionIndicators()
        {
            this.iCollidingLeft   = false;
            this.iCollidingTop    = false;
            this.iCollidingRight  = false;
            this.iCollidingBottom = false;
        }
    }
