'use client'

import { List } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { usePathname } from '@/shared/i18n'
import { cx } from '@/shared/lib/dom'
import { pagesRoute } from '@/shared/routes'
import { SettingsButton, isAppleClient } from '@/shared/ui/tma'
import { HeaderLayout } from './HeaderLayout'
import { CarsButton } from './buttons/CarsButton'
import { EditButton } from './buttons/EditButton'

export function Header(): JSX.Element {
    const pathname = usePathname()

    const isApple = isAppleClient()

    return (
        <List role={'header'}>
            <HeaderLayout>
                <div className={cx('flex justify-between', !isApple && 'p-4')}>
                    <SettingsButton />

                    <div className={'flex gap-2'}>
                        <EditButton />

                        {pagesRoute.home !== pathname && <CarsButton />}
                    </div>
                </div>
            </HeaderLayout>
        </List>
    )
}
