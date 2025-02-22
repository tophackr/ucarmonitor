import { openLink } from '@telegram-apps/sdk-react'
import clsx from 'clsx'
import { default as NextLink, type LinkProps as NextLinkProps } from 'next/link'
import { type FC, type JSX, type MouseEventHandler, useCallback } from 'react'

export interface LinkProps
    extends NextLinkProps,
        Omit<JSX.IntrinsicElements['a'], 'href'> {}

export const Link: FC<LinkProps> = ({
    className,
    onClick: propsOnClick,
    href,
    ...props
}) => {
    const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
        e => {
            propsOnClick?.(e)

            // Compute if target path is external. In this case we would like to open link using
            // TMA method.
            let path: string
            if (typeof href === 'string') {
                path = href
            } else {
                const { search = '', pathname = '', hash = '' } = href
                path = `${pathname}?${search}#${hash}`
            }

            const targetUrl = new URL(path, window.location.toString())
            const currentUrl = new URL(window.location.toString())
            const isExternal =
                targetUrl.protocol !== currentUrl.protocol ||
                targetUrl.host !== currentUrl.host

            if (isExternal) {
                e.preventDefault()
                openLink(targetUrl.toString())
            }
        },
        [href, propsOnClick]
    )

    return (
        <NextLink
            {...props}
            href={href}
            onClick={onClick}
            className={clsx(className, 'text-link no-underline')}
        />
    )
}
