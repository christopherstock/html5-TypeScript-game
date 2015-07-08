
    /*****************************************************************************
    *   Represents one game character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.7
    *****************************************************************************/
    class MfgPlayer extends MfgGameObject
    {
        /** Horizontal moving speed in pixels per tick. */
        public          iSpeedMove                      :number                         = 0;

        /*****************************************************************************
        *   Initialize and reset human player.
        *****************************************************************************/
        public constructor()
        {
            super
            (
                new LibRect2D
                (
                    0,
                    0,
                    MfgSprite.PLAYER_STAND_RIGHT.iFrameWidth,
                    MfgSprite.PLAYER_STAND_RIGHT.iFrameHeight
                ),
                MfgSprite.PLAYER_STAND_RIGHT,
                null,
                MfgCollisionPlan.RELUCTANT,
                new LibCollisionDebug
                (
                    MfgDebugSettings.DEBUG_DRAW_RECT_PLAYER,
                    MfgDebugSettings.DEBUG_COLOR_RECT_PLAYER_BORDER,
                    MfgDebugSettings.DEBUG_COLOR_RECT_PLAYER_FILL,
                    MfgDebugSettings.DEBUG_COLOR_COLLISION_INDICATOR,
                    MfgDebugSettings.DEBUG_SIZE_COLLISION_INDICATOR,
                    MfgDebugSettings.DEBUG_SIZE_STROKE
                )
            );

            this.iSpeedMove = MfgSettings.PLAYER_SPEED_MOVE;
        }

        /*****************************************************************************
        *   Handle the keys the user has pressed.
        *****************************************************************************/
        public handlePlayerKeys()
        {
            //alter player position
            if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_LEFT ) )
            {
                this.moveWithCollisionCheck( LibDirection2D.LEFT, this.iSpeedMove );
                this.setNewSprite( MfgSprite.PLAYER_WALK_LEFT );
            }

            if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_RIGHT ) )
            {
                this.moveWithCollisionCheck( LibDirection2D.RIGHT, this.iSpeedMove );
                this.setNewSprite( MfgSprite.PLAYER_WALK_RIGHT );
            }

            //enable vertical movement for debug purposes
            if ( MfgDebugSettings.DEBUG_DISABLE_GRAVITY )
            {
                if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_UP ) )
                {
                    this.moveWithCollisionCheck( LibDirection2D.UP, this.iSpeedMove );
                }

                if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_DOWN ) )
                {
                    this.moveWithCollisionCheck( LibDirection2D.DOWN, this.iSpeedMove );
                }
            }
        }
    }
