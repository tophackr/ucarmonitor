import {
    isMiniAppDark,
    themeParamsBackgroundColor
} from '@telegram-apps/sdk-react'
import { Drawer } from '@xelene/vaul-with-scroll-fix'
import { forwardRef, useMemo } from 'react'
import { cx } from '@/shared/lib/dom'
import { hexToRGB } from '../utils/hexToRGB'
import styles from './ModalOverlay.module.css'

export interface ModalOverlayProps {
    className?: string
}

const DEFAULT_LIGHT_OVERLAY_RGB = [255, 255, 255]
const DEFAULT_DARK_OVERLAY_RGB = [33, 33, 33]

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
    ({ className, ...props }, ref) => {
        // We don't use getComputedStyle because overlay renders before the appearance is changing
        const [r, g, b] = useMemo(() => {
            const tpBgColor = themeParamsBackgroundColor()
            if (tpBgColor) {
                return hexToRGB(tpBgColor)
            }

            const isDark = isMiniAppDark()

            return isDark ? DEFAULT_DARK_OVERLAY_RGB : DEFAULT_LIGHT_OVERLAY_RGB
        }, [])

        return (
            <Drawer.Overlay
                ref={ref}
                // Opacity on overlay is dynamically calculated based on the percentage of opened drawers
                // This is why we use rgba here and not background: token + opacity
                style={{ background: `rgba(${r}, ${g}, ${b}, .4)` }}
                className={cx(styles['wrapper'], className)}
                {...props}
            />
        )
    }
)

ModalOverlay.displayName = 'ModalOverlay'
