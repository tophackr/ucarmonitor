import clsx from 'clsx'
import {
    type HTMLAttributes,
    type JSX,
    type PropsWithChildren,
    memo
} from 'react'

export const PulseSkeletonLayout = memo(function PulseSkeletonLayout({
    children,
    className,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>): JSX.Element {
    return (
        <div
            role={'status'}
            className={clsx('animate-pulse', className)}
            {...props}
        >
            {children}

            <span className={'sr-only'}>Loading...</span>
        </div>
    )
})
