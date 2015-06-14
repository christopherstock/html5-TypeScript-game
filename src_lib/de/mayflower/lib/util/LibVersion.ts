
    /*****************************************************************************
    *   A project version specifier.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibVersion
    {
        /** This version's specifier. */
        private                 iVersion                :string             = null;
        /** This version's internal codename. */
        private                 iCodename               :string             = null;
        /** This version's completion date. */
        private                 iDate                   :string             = null;
        /** This version's changelog. */
        private                 iLog                    :string             = null;

        /*****************************************************************************
        *   Creates a project version.
        *
        *   @param aVersion     The version specifier.
        *   @param aCodename    The internal codename.
        *   @param aDate        The completion date.
        *   @param aLog         The changelog.
        *****************************************************************************/
        constructor( aVersion:string, aCodename:string, aDate:string, aLog:string )
        {
            this.iVersion  = aVersion;
            this.iCodename = aCodename;
            this.iDate     = aDate;
            this.iLog      = aLog;
        }

        /**************************************************************************************
        *   Returns a representation of the current project version and it's date.
        *
        *   @return A representation of the current project's version with it's timestamp.
        **************************************************************************************/
        public getVersionDescriptor():string
        {
            return ( "v. " + this.iVersion + ", " + this.iDate );
        }
    }
