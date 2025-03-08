import { openLink } from '@telegram-apps/sdk-react'
import clsx from 'clsx'
import {
    type ComponentProps,
    type MouseEventHandler,
    memo,
    useCallback
} from 'react'
import { Link as IntlLink } from '@/shared/i18n'

type IntlProps = ComponentProps<typeof IntlLink>

export const Link = memo(function Link({
    className,
    onClick: propsOnClick,
    href,
    ...props
}: IntlProps) {
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
        <IntlLink
            {...props}
            href={href}
            onClick={onClick}
            className={clsx(className, 'text-link no-underline')}
        />
    )
})
