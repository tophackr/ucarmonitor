import {
    viewportHeight,
    viewportSafeAreaInsetTop
} from '@telegram-apps/sdk-react'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

export function IosKeyboardFix({ children }: PropsWithChildren) {
    const initialHeight = useRef(viewportHeight())
    const initialTop = useRef(viewportSafeAreaInsetTop())

    const [currentHeight, setCurrentHeight] = useState(initialHeight.current)
    const [currentTop, setCurrentTop] = useState(initialTop.current)

    useEffect(() => {
        const interval = setInterval(() => {
            const newBottom = viewportSafeAreaInsetTop()
            const newHeight = viewportHeight()

            console.log(
                'newBottom',
                newBottom,
                currentTop,
                newBottom !== currentTop
            )

            if (newBottom !== currentTop) {
                setCurrentTop(newBottom)
                setCurrentHeight(newHeight)
            }
        }, 500)

        return () => clearInterval(interval)
    }, [currentTop])

    const keyboardOffset = currentHeight - viewportHeight()

    console.log('render', keyboardOffset, currentHeight, viewportHeight())

    return (
        <div style={{ paddingBottom: keyboardOffset > 0 ? keyboardOffset : 0 }}>
            {children}
        </div>
    )
}
