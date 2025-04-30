import {
    viewportHeight,
    viewportSafeAreaInsetBottom
} from '@telegram-apps/sdk-react'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

export function IosKeyboardFix({ children }: PropsWithChildren) {
    const initialHeightRef = useRef<number>(viewportHeight())
    const initialBottomRef = useRef<number>(viewportSafeAreaInsetBottom())

    const [fixedHeight, setFixedHeight] = useState(initialHeightRef.current)
    const [fixedBottom, setFixedBottom] = useState(initialBottomRef.current)

    useEffect(() => {
        const interval = setInterval(() => {
            const newBottom = viewportSafeAreaInsetBottom()
            const newHeight = viewportHeight()

            if (newBottom !== fixedBottom) {
                setFixedHeight(newHeight)
                setFixedBottom(newBottom)
            }
        }, 500)

        return () => clearInterval(interval)
    }, [fixedBottom])

    console.log(
        'fixedHeight',
        fixedHeight,
        viewportHeight(),
        fixedHeight - viewportHeight()
    )

    const keyboardOffset = fixedHeight - viewportHeight()

    return (
        <div style={{ paddingBottom: keyboardOffset > 0 ? keyboardOffset : 0 }}>
            {children}
        </div>
    )
}
