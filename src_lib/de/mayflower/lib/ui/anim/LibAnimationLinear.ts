
    /*****************************************************************************
    *   Represents a linear animation.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class LibAnimationLinear extends LibAnimation
    {
        /** The moving angle. */
        public                  iAngle                          :number                 = 0;
        /** Ticks into positive direction. */
        public                  iTicksPositiveDirection         :number                 = 0;
        /** Ticks into negative direction. */
        public                  iTicksNegativeDirection         :number                 = 0;
        /** The distance to move in px per tick. */
        public                  iDistancePerTick                :number                 = 0;

        /** The current distance to the anchor. */
        public                  iCurrentDistance                :number                 = 0;

        /*****************************************************************************
        *   Creates a new linear animation.
        *
        *   @param  aAngle                  The angle in which the linear animation is performed.
        *   @param  aTicksPositiveDirection The disired ticks to linear move into the direction of the specified angle.
        *   @param  aTicksNegativeDirection The disired ticks to linear move into the opposite direction of the specified angle.
        *   @param  aDistancePerTick        The distance to move per tick.
        *****************************************************************************/
        public constructor
        (
            aAngle:number,
            aTicksPositiveDirection:number,
            aTicksNegativeDirection:number,
            aDistancePerTick:number
        )
        {
            super();

            this.iAngle = aAngle;

            this.iTicksPositiveDirection = aTicksPositiveDirection;
            this.iTicksNegativeDirection = aTicksNegativeDirection;
            this.iDistancePerTick        = aDistancePerTick;
            this.iCurrentDistance        = 0;
        }

        /*****************************************************************************
        *   Being invoked each tick, this method handles this animation.
        *****************************************************************************/
        public render():void
        {
            var newLocation:LibPoint2D = LibMath2D.sinCosPoint
            (
                this.iAnchor,
                this.iAngle,
                this.iCurrentDistance,
                this.iCurrentDistance
            );

            this.iLastDeltaX = newLocation.iX - this.iCurrentLocation.iX;
            this.iLastDeltaY = newLocation.iY - this.iCurrentLocation.iY;

            this.iCurrentLocation = newLocation;

            //increase tick counter
            ++this.iCurrentTick;

            //check current direction
            if ( this.iNegativeMoving )
            {
                if ( this.iCurrentTick < this.iTicksNegativeDirection )
                {
                    this.iCurrentDistance -= this.iDistancePerTick;
                }
                else
                {
                    this.iCurrentTick    = -this.iTicksNegativeDirection;
                    this.iNegativeMoving = false;
                }
            }
            else
            {
                if ( this.iCurrentTick < this.iTicksPositiveDirection )
                {
                    this.iCurrentDistance += this.iDistancePerTick;
                }
                else
                {
                    this.iCurrentTick    = -this.iTicksPositiveDirection;
                    this.iNegativeMoving = true;
                }
            }
        }
    }
