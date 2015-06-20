
    /*****************************************************************************
    *   Represents a neverending main thread / game loop mechanism.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class LibMainThread
    {
        /** The singleton instance of this class. */
        private         static                  staticHelper        :LibMainThread  = null;

        private                                 iCallback           :any            = null;

        private                                 iThreadDelay        :number         = null;

        public constructor( aCallback:any, aThreadDelay:number )
        {
            this.iCallback    = aCallback;
            this.iThreadDelay = aThreadDelay;
        }

        public start()
        {
            LibMainThread.staticHelper = this;

            this.tick();
        }

        private tick()
        {
            LibMainThread.staticHelper.iCallback();

            window.setTimeout( LibMainThread.staticHelper.tick, LibMainThread.staticHelper.iThreadDelay );
        }
    }
