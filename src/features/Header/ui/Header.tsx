'use client'

import { themeParams } from '@telegram-apps/sdk-react'
import clsx from 'clsx'
import { usePathname } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { ListSection } from '@/shared/ui'
import { SettingsButton } from '@/shared/ui/tma'
import { CarsButton } from './buttons/CarsButton'
import { EditButton } from './buttons/EditButton'

export function Header() {
    const pathname = usePathname()

    const isNotSameTheme =
        themeParams.headerBackgroundColor() !==
        themeParams.secondaryBackgroundColor()

    return (
        <ListSection>
            <div
                className={clsx(
                    'flex justify-between py-4 bg-header',
                    isNotSameTheme && 'px-4'
                )}
            >
                <SettingsButton />

                <div className={'space-x-2'}>
                    <EditButton />

                    {pagesRoute.home !== pathname && <CarsButton />}
                </div>
            </div>
        </ListSection>
    )
}
