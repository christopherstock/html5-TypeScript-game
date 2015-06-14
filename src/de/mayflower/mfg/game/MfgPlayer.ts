
    /*****************************************************************************
    *   Represents one game character.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
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
                new LibCollisionDebug
                (
                    MfgSettings.DEBUG_DRAW_RECT_PLAYER,
                    MfgSettings.DEBUG_COLOR_RECT_PLAYER_BORDER,
                    MfgSettings.DEBUG_COLOR_RECT_PLAYER_FILL,
                    MfgSettings.DEBUG_COLOR_RECT_COLLISION_INDICATOR,
                    MfgSettings.DEBUG_COLLISION_INDICATOR_SIZE,
                    MfgSettings.DEBUG_STROKE_SIZE
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
                this.moveWithCollisionCheck( LibDirection.LEFT, this.iSpeedMove );
                this.setNewSprite( MfgSprite.PLAYER_WALK_LEFT );
            }

            if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_RIGHT ) )
            {
                this.moveWithCollisionCheck( LibDirection.RIGHT, this.iSpeedMove );
                this.setNewSprite( MfgSprite.PLAYER_WALK_RIGHT );
            }

            //enable vertical movement for debug purposes
            if ( MfgSettings.DEBUG_DISABLE_GRAVITY )
            {
                if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_UP ) )
                {
                    this.moveWithCollisionCheck( LibDirection.UP, this.iSpeedMove );
                }

                if ( MfgGame.keySystem.isPressed( LibKeySystem.KEY_DOWN ) )
                {
                    this.moveWithCollisionCheck( LibDirection.DOWN, this.iSpeedMove );
                }
            }
        }

        /*****************************************************************************
        *   Delivers the collision plan.
        *
        *   @return The collision plan for this game object.
        *****************************************************************************/
        public getCollisionPlan():LibCollisionPlan
        {
            return LibCollisionPlan.RELUCTANT;
        }
    }
