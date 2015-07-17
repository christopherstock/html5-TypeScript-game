
    /*****************************************************************************
    *   Represents one debug group. Logging can be enabled or disabled for this group.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class LibDebug
    {
        /** The flag that enables or disables logging for this debug group. */
        private             iDebugEnabled               :boolean                        = false;

        /*****************************************************************************
        *   Constructs a new debug group.
        *
        *   @param aDebugEnabled  Flags if this debug group should log messages.
        *****************************************************************************/
        public constructor( aDebugEnabled:boolean )
        {
            this.iDebugEnabled = aDebugEnabled;
        }

        /*****************************************************************************
        *   Logs a line of output to the default console.
        *   This will only generate output if the debug for this debug group
        *   AND global debug switch is enabled.
        *
        *   @param msg The message to log to the default console.
        *****************************************************************************/
        public log( msg:string ):void
        {
            if ( this.iDebugEnabled )
            {
                console.log( '[' + LibStringFormat.getDateTimeString() + '] ' + msg );
            }
        }
    }
