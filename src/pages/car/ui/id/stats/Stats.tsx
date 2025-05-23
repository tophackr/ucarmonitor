'use client'

import { List, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX } from 'react'
import { useCarContext } from '@/entities/car'
import { generateMenu } from '@/shared/lib/link-menu'
import { statsRoute } from '@/shared/routes'
import { LinkCell } from '@/shared/ui/cell'
import type { StatsCategory } from './StatsCategory'
import { menuData } from './menuData'

export function Stats(): JSX.Element {
    const t = useTranslations('StatsCategoryName')
    const { car } = useCarContext()

    const data = generateMenu(
        (name: StatsCategory) => statsRoute[name](car.id),
        t,
        menuData
    )

    const sections = Array.from(new Set(data.map(menu => menu.group)))

    return (
        <List>
            {sections.map(group => {
                const items = data.filter(menu => menu.group === group)

                return (
                    <Section key={group}>
                        {items.map(({ name, href, icon, bgColor }, index) => (
                            <LinkCell
                                key={index}
                                href={href}
                                icon={icon}
                                bgColor={bgColor}
                            >
                                {name}
                            </LinkCell>
                        ))}
                    </Section>
                )
            })}
        </List>
    )
}
