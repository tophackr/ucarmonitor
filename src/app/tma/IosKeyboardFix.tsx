import {
    viewportHeight,
    viewportSafeAreaInsetBottom
} from '@telegram-apps/sdk-react'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

export function IosKeyboardFix({ children }: PropsWithChildren) {
    const initialHeight = useRef(viewportHeight())
    const initialBottom = useRef(viewportSafeAreaInsetBottom())

    const [currentHeight, setCurrentHeight] = useState(initialHeight.current)
    const [currentBottom, setCurrentBottom] = useState(initialBottom.current)

    useEffect(() => {
        const interval = setInterval(() => {
            const newBottom = viewportSafeAreaInsetBottom()
            const newHeight = viewportHeight()

            console.log(
                'newBottom',
                newBottom,
                currentBottom,
                newBottom !== currentBottom
            )

            if (newBottom !== currentBottom) {
                setCurrentBottom(newBottom)
                setCurrentHeight(newHeight)
            }
        }, 500)

        return () => clearInterval(interval)
    }, [currentBottom])

    const keyboardOffset = currentHeight - viewportHeight()

    console.log('render', keyboardOffset, currentHeight, viewportHeight())

    return (
        <div style={{ paddingBottom: keyboardOffset > 0 ? keyboardOffset : 0 }}>
            {children}
        </div>
    )
}
