'use client'

import { themeParams } from '@telegram-apps/sdk-react'
import clsx from 'clsx'
import { useParams } from 'next/navigation'
import { usePathname } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'
import { ListSection } from '@/shared/ui'
import { CarsButton } from './buttons/CarsButton'
import { EditButton } from './buttons/EditButton'
import { SettingsButton } from './buttons/SettingsButton'

export function Header() {
    const pathname = usePathname()
    const params = useParams()

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
                    {'carId' in params && <EditButton />}
                    {pagesRoute.cars !== pathname && <CarsButton />}
                </div>
            </div>
        </ListSection>
    )
}
