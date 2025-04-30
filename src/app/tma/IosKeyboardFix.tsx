import {
    viewportHeight,
    viewportSafeAreaInsetBottom
} from '@telegram-apps/sdk-react'
import { type PropsWithChildren, useEffect, useRef, useState } from 'react'

export function IosKeyboardFix({ children }: PropsWithChildren) {
    const initialHeightRef = useRef<number>(viewportHeight())
    const initialBottomRef = useRef<number>(viewportSafeAreaInsetBottom())

    const [fixedBottom, setFixedBottom] = useState(initialBottomRef.current)
    console.log('initial', initialHeightRef.current, initialBottomRef.current)

    useEffect(() => {
        const interval = setInterval(() => {
            const newBottom = viewportSafeAreaInsetBottom()
            const newHeight = viewportHeight()

            // Костыль для вызова useEffect
            console.log(fixedBottom)

            console.log(
                'bottom',
                newBottom,
                initialBottomRef.current,
                newBottom !== initialBottomRef.current
            )

            if (newBottom !== initialBottomRef.current) {
                initialHeightRef.current = newHeight
                initialBottomRef.current = newBottom
                setFixedBottom(fixedBottom)
            }
        }, 500)

        return () => clearInterval(interval)
    }, [fixedBottom])

    console.log(
        'fixedHeight',
        initialHeightRef.current,
        viewportHeight(),
        initialHeightRef.current - viewportHeight()
    )

    const keyboardOffset = initialHeightRef.current - viewportHeight()

    return (
        <div style={{ paddingBottom: keyboardOffset > 0 ? keyboardOffset : 0 }}>
            {children}
        </div>
    )
}
