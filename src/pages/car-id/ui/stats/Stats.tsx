import { List, Placeholder, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { type JSX, memo } from 'react'
import { type SegmentProps, Segments } from '@/features/preview-segment'
import { useCarContext } from '@/entities/car'
import { StatsCategory, statsRoute } from '@/entities/stat'
import { generateMenu } from '@/shared/lib/link-menu'
import { LinkCell } from '@/shared/ui/cell'
import { menuData } from './menuData'

export const Stats = memo(function Stats(
    segmentProps: SegmentProps
): JSX.Element {
    const t = useTranslations('StatsCategoryName')
    const { car } = useCarContext()

    const data = generateMenu(
        (name: StatsCategory) => statsRoute.build(car.id, name),
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
