'use client'

import { themeParams } from '@telegram-apps/sdk-react'
import { List, Section } from '@telegram-apps/telegram-ui'
import clsx from 'clsx'
import { usePathname } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { CarsButton } from './buttons/CarsButton'
import { SettingsButton } from './buttons/SettingsButton'

export function Header() {
    const pathname = usePathname()

    const isNotSameTheme =
        themeParams.headerBackgroundColor() !==
        themeParams.secondaryBackgroundColor()

    return (
        <List>
            <Section>
                <div
                    className={clsx(
                        'flex justify-between py-4 bg-header',
                        isNotSameTheme && 'px-4'
                    )}
                >
                    <SettingsButton />
                    {pagesRoute.cars !== pathname && <CarsButton />}
                </div>
            </Section>
        </List>
    )
}
