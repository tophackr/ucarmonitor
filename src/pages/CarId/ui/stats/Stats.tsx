import { List, Placeholder, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { type SegmentProps, Segments } from '@/features/PreviewSegment'
import { useCarContext } from '@/entities/car'
import { generateMenu } from '@/shared/lib/link-menu'
import { statsRoute } from '@/shared/routes'
import { LinkCell } from '@/shared/ui/cell'
import { menuData } from './menuData'
import type { StatsMenu } from './types/StatsMenu'

export const Stats = memo(function Stats(segmentProps: SegmentProps) {
    const t = useTranslations('PreviewStatsSegment')
    const { car } = useCarContext()

    const data = generateMenu(
        name => statsRoute[name as StatsMenu](car.id),
        t,
        menuData
    )

    const sections = Array.from(new Set(data.map(menu => menu.group)))

    return (
        <>
            <List>
                <Placeholder>
                    <Segments {...segmentProps} />
                </Placeholder>

                {sections.map(group => {
                    const items = data.filter(menu => menu.group === group)

                    return (
                        <Section key={group}>
                            {items.map(
                                ({ name, href, icon, bgColor }, index) => (
                                    <LinkCell
                                        key={index}
                                        href={href}
                                        icon={icon}
                                        bgColor={bgColor}
                                    >
                                        {name}
                                    </LinkCell>
                                )
                            )}
                        </Section>
                    )
                })}
            </List>
        </>
    )
})
