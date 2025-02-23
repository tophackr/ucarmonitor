import clsx from 'clsx'
import type { HTMLAttributes, PropsWithChildren } from 'react'

export function PulseSkeletonLayout({
    children,
    className,
    ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
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
}
