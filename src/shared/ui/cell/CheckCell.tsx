'use client'

import { type CellProps, Cell as TGUICell } from '@telegram-apps/telegram-ui'
import {
    type JSX,
    type MouseEvent as RME,
    memo,
    useEffect,
    useRef
} from 'react'

export const CheckCell = memo(function CheckCell({
    children,
    onClick,
    ...props
}: CellProps): JSX.Element {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const target = ref.current?.querySelector('.tgui-8735a62be5a8b8a7')

        if (target && onClick) {
            const handleClick = (event: Event) => {
                onClick(event as unknown as RME<HTMLDivElement, MouseEvent>)
            }

            target.addEventListener('click', handleClick)

            return () => {
                target.removeEventListener('click', handleClick)
            }
        }
    }, [onClick])

    return (
        <TGUICell
            ref={ref}
            interactiveAnimation={'opacity'}
            {...props}
        >
            {children}
        </TGUICell>
    )
})
