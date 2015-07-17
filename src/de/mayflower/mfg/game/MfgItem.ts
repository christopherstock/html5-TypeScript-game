
    /*****************************************************************************
    *   Represents an item that can be picked up.
    *
    *   @author     Christopher Stock
    *   @version    0.0.8
    *****************************************************************************/
    class MfgItem extends MfgGameObject
    {
        /*****************************************************************************
        *   Creates a new item.
        *
        *   @param  aX          X position.
        *   @param  aY          Y position.
        *   @param  aAnimations The animation for this item. May be <code>null</code> if no animation is requested.
        *****************************************************************************/
        public constructor( aX:number, aY:number, aAnimations:Array<LibAnimation> )
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
                aAnimations,
                MfgCollisionPlan.VANISHING,
                new LibCollisionDebug
                (
                    MfgDebugSettings.DEBUG_DRAW_RECT_ITEM,
                    MfgDebugSettings.DEBUG_COLOR_RECT_ITEM_BORDER,
                    MfgDebugSettings.DEBUG_COLOR_RECT_ITEM_FILL,
                    MfgDebugSettings.DEBUG_COLOR_COLLISION_INDICATOR,
                    MfgDebugSettings.DEBUG_SIZE_COLLISION_INDICATOR,
                    MfgDebugSettings.DEBUG_SIZE_STROKE
                )
            );
        }

        /*****************************************************************************
        *   Draws this sprite for the specified camera context.
        *
        *   @param  context The 2d drawing context.
        *   @param  camera  The camera context to use for this drawing operation.
        *****************************************************************************/
        public draw( context:CanvasRenderingContext2D, camera:LibCamera )
        {
/*
            if ( this.iDisabled  )
            {
                this.iAlpha -= 0.07;
                if ( this.iAlpha < 0.0 ) this.iAlpha = 0.0;
            }
*/
            if ( !this.iDisabled )
            {
                super.draw( context, camera );
            }
        }

        /*****************************************************************************
        *   Being invoked when this game object shall vanish.
        *****************************************************************************/
        public vanish():void
        {
            if ( !this.iDisabled )
            {
                super.vanish();

                if ( !MfgDebugSettings.DEBUG_DISABLE_SOUNDS ) MfgGame.soundSystem.playSound( MfgSound.SOUND_FX_BLING );
            }
        }
    }
