
    /*****************************************************************************
    *   Loads and manages all desired sounds.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class LibSoundSystem
    {
        /** This array contains all loaded sounds. */
        private                     iAllSounds                              :Array<HTMLAudioElement>    = [];

        /*****************************************************************************
        *   Loads all audio elements.
        *****************************************************************************/
        constructor( fileNames:Array<string> )
        {
            //load all sounds
            for ( var i:number = 0; i < fileNames.length; ++i )
            {
                this.iAllSounds[ fileNames[ i ] ] = new Audio( fileNames[ i ] );
            }
        }

        /*****************************************************************************
        *   Creates and plays a COPY of the specified audio object.
        *
        *   @param id The ID of the audio object to play.
        *****************************************************************************/
        public playSound( id:string )
        {
            var clipClone:HTMLAudioElement = <HTMLAudioElement>this.iAllSounds[ id ].cloneNode( true );
            clipClone.play();
        }
    }
