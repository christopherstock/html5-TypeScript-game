
    /*****************************************************************************
    *   The key system that manages all pressed keys.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class LibKeySystem
    {
        /** The keycode that represents the 'ENTER' key. */
        public      static  KEY_ENTER       :number                             = 13;
        /** The keycode that represents the 'ESCAPE' key. */
        public      static  KEY_ESCAPE      :number                             = 27;
        /** The keycode that represents the 'SPACE' key. */
        public      static  KEY_SPACE       :number                             = 32;
        /** The keycode that represents the 'ARROW LEFT' key. */
        public      static  KEY_LEFT        :number                             = 37;
        /** The keycode that represents the 'ARROW UP' key. */
        public      static  KEY_UP          :number                             = 38;
        /** The keycode that represents the 'ARROW RIGHT' key. */
        public      static  KEY_RIGHT       :number                             = 39;
        /** The keycode that represents the 'ARROW DOWN' key. */
        public      static  KEY_DOWN        :number                             = 40;

        /** All current key information. */
        private             iAllKeys        :Array<boolean>                     = null;

        /** The debug context. */
        private             iDebug          :LibDebug                           = null;

        /*****************************************************************************
        *   Creates a new key object.
        *
        *   @param aDebug   A debug context.
        *****************************************************************************/
        public constructor( aDebug:LibDebug )
        {
            this.iDebug     = aDebug;
            this.iAllKeys   = [];

            var instance:LibKeySystem = this;
            var onKeyDown:any = function( evt:KeyboardEvent )
            {
                instance.handleKeyDown( evt );
            };

            var onKeyUp:any = function( evt:KeyboardEvent )
            {
                instance.handleKeyUp( evt );
            };

            //set event listener for keyboard devices - all but IE
            window.addEventListener( "keydown",     onKeyDown, false );
            window.addEventListener( "keyup",       onKeyUp,   false );

            //set event listener for keyboard devices - IE
            window.addEventListener( "onkeydown",   onKeyDown, false );
            window.addEventListener( "onkeyup",     onKeyUp,   false );
        }

        /*****************************************************************************
        *   This method is always invoked by the system if a key is pressed.
        *
        *   @param evt  The system's propagated key event.
        *****************************************************************************/
        public handleKeyDown( evt:KeyboardEvent )
        {
            var keyCode = evt.which;
            this.iAllKeys[ keyCode ] = true;

            this.iDebug.log( "key pressed ["  + keyCode + "]" );
        }

        /*****************************************************************************
        *   This method is always invoked by the system if a key is released.
        *
        *   @param evt  The system's propagated key event.
        *****************************************************************************/
        public handleKeyUp( evt:KeyboardEvent )
        {
            var keyCode = evt.which;
            this.iAllKeys[ keyCode ] = false;

            this.iDebug.log( "key released ["  + keyCode + "]" );
        }

        /*****************************************************************************
        *   Checks if the key with the given keyCode is currently pressed.
        *
        *   @param  keyCode The keyCode of the key to return pressed state.
        *   @return         <code>true</code> if this key is currently pressed.
        *                   Otherwise <code>false</code>.
        *****************************************************************************/
        public isPressed( keyCode:number ):boolean
        {
            return this.iAllKeys[ keyCode ];
        }
    }
