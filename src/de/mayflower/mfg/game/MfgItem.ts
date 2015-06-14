
    /*****************************************************************************
    *   Represents an item that can be picked up.
    *
    *   @author     Christopher Stock
    *   @version    0.0.6
    *****************************************************************************/
    class MfgItem extends MfgGameObject
    {
        /** Flags picked up state. */
        public                      iPickedUp   :boolean                        = false;

        /*****************************************************************************
        *   Creates a new item.
        *
        *   @param  aX      X position.
        *   @param  aY      Y position.
        *****************************************************************************/
        public constructor( aX:number, aY:number )
        {
            super
            (
                new LibRect2D
                (
                    aX,
                    aY,
                    MfgSprite.ITEM_MF_LOGO.iFrameWidth,
                    MfgSprite.ITEM_MF_LOGO.iFrameHeight
                ),
                MfgSprite.ITEM_MF_LOGO,
                new LibCollisionDebug
                (
                    MfgSettings.DEBUG_DRAW_RECT_ITEM,
                    MfgSettings.DEBUG_COLOR_RECT_ITEM_BORDER,
                    MfgSettings.DEBUG_COLOR_RECT_ITEM_FILL,
                    MfgSettings.DEBUG_COLOR_RECT_ITEM_FILL,
                    MfgSettings.DEBUG_COLLISION_INDICATOR_SIZE,
                    MfgSettings.DEBUG_STROKE_SIZE
                )
            );
        }

        /*****************************************************************************
        *   Draws this sprite for the specified camera context.
        *
        *   @param  camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( camera:LibCamera )
        {
/*
            if ( this.iPickedUp  )
            {
                this.iAlpha -= 0.07;
                if ( this.iAlpha < 0.0 ) this.iAlpha = 0.0;
            }
*/
            if ( !this.iPickedUp )
            {
                super.draw( camera );
            }
        }

        /*****************************************************************************
        *   Being invoked when this game object shall vanish.
        *****************************************************************************/
        public vanish():void
        {
            if ( !this.iPickedUp )
            {
                this.iPickedUp = true;

                if ( !MfgSettings.DEBUG_MUTE ) MfgGame.soundSystem.playSound( MfgSound.SOUND_FX_BLING );
            }
        }

        /*****************************************************************************
        *   Delivers the collision plan.
        *
        *   @return The collision plan for this game object.
        *****************************************************************************/
        public getCollisionPlan():LibCollisionPlan
        {
            return LibCollisionPlan.VANISHING;
        }
    }
