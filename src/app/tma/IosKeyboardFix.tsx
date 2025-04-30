import {
    viewportHeight,
    viewportSafeAreaInsetBottom
} from '@telegram-apps/sdk-react'
import { type PropsWithChildren, useEffect, useState } from 'react'

export function IosKeyboardFix({ children }: PropsWithChildren) {
    const [fixedHeight, setFixedHeight] = useState(viewportHeight())
    const [fixedBottom, setFixedBottom] = useState(
        viewportSafeAreaInsetBottom()
    )

    useEffect(() => {
        const safeAreaBottom = viewportSafeAreaInsetBottom()
        console.log('safeAreaBottom', safeAreaBottom, fixedBottom)

        if (safeAreaBottom !== fixedBottom) {
            setFixedHeight(viewportHeight())
            setFixedBottom(safeAreaBottom)
        }
    }, [fixedBottom])

    console.log(
        'fixedHeight',
        fixedHeight,
        viewportHeight(),
        fixedHeight - viewportHeight()
    )

    return (
        <div style={{ paddingBottom: fixedHeight - viewportHeight() }}>
            {children}
        </div>
    )
}
