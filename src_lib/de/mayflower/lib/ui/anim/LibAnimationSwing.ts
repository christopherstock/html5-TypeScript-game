
    /*****************************************************************************
    *   Represents a swinging animation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibAnimationSwing extends LibAnimation
    {
        /** The moving angle per tick. */
        public                  iAnglePerTick                   :number                 = 0;
        /** Ticks into clockwise direction. */
        public                  iTicksClockwiseDirection        :number                = 0;
        /** Ticks into counter-clockwise direction. */
        public                  iTicksCounterClockwiseDirection :number                 = 0;
        /** The horizontal distance from the anchor in px. */
        public                  iDistanceX                      :number                 = 0;
        /** The vertical distance from the anchor in px. */
        public                  iDistanceY                      :number                 = 0;

        /** The current swing angle. */
        public                  iCurrentAngle                   :number                 = 0;

        /*****************************************************************************
        *   Creates a new swing animation.
        *
        *   @param  aStartAngle                     The animations start angle.
        *   @param  aAnglePerTick                   The angle delta to swing per tick.
        *   @param  aTicksClockwiseDirection        Ticks to perform in the clockwise direction.
        *   @param  aTicksCounterClockwiseDirection Ticks to perform in the counter-clockwise direction.
        *   @param  aDistanceX                      The horizontal distance to the anchor in px.
        *   @param  aDistanceY                      The vertical distance to the anchor in px.
        *****************************************************************************/
        public constructor
        (
            aStartAngle:number,
            aAnglePerTick:number,
            aTicksClockwiseDirection:number,
            aTicksCounterClockwiseDirection:number,
            aDistanceX:number,
            aDistanceY:number
        )
        {
            super();

            this.iAnglePerTick                   = aAnglePerTick;
            this.iTicksClockwiseDirection        = aTicksClockwiseDirection;
            this.iTicksCounterClockwiseDirection = aTicksCounterClockwiseDirection;
            this.iDistanceX                      = aDistanceX;
            this.iDistanceY                      = aDistanceY;

            this.iCurrentAngle                   = aStartAngle;
        }

        /*****************************************************************************
        *   Being invoked each tick, this method handles this animation.
        *****************************************************************************/
        public render():void
        {
            var newLocation:LibPoint2D = LibMath2D.sinCosPoint
            (
                this.iAnchor,
                this.iCurrentAngle,
                this.iDistanceX,
                this.iDistanceY
            );

            this.iLastDeltaX = newLocation.iX - this.iCurrentLocation.iX;
            this.iLastDeltaY = newLocation.iY - this.iCurrentLocation.iY;

            this.iCurrentLocation = newLocation;

            //increase tick counter
            ++this.iCurrentTick;

            //check current direction
            if ( this.iNegativeMoving )
            {
                if ( this.iCurrentTick < this.iTicksCounterClockwiseDirection )
                {
                    this.iCurrentAngle -= this.iAnglePerTick;
                }
                else
                {
                    this.iCurrentTick    = -this.iTicksCounterClockwiseDirection;
                    this.iNegativeMoving = false;
                }
            }
            else
            {
                if ( this.iCurrentTick < this.iTicksClockwiseDirection )
                {
                    this.iCurrentAngle += this.iAnglePerTick;
                }
                else
                {
                    this.iCurrentTick    = -this.iTicksClockwiseDirection;
                    this.iNegativeMoving = true;
                }
            }
        }
    }
