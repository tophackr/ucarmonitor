'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { useInteractionContext } from '@/entities/interaction'
import { useIntlDateTime } from '@/shared/i18n'
import { IconCell } from '@/shared/ui/cell'

interface BaseSectionProps {
    title: string
}

export const BaseSection = memo(function BaseSection({
    title
}: BaseSectionProps) {
    const t = useTranslations('CarActionForm')

    const {
        interaction: { date, mileage, amount, engineHours, description }
    } = useInteractionContext()

    const intlDate = useIntlDateTime(date)

    return (
        <>
            <Section
                header={<Section.Header large={true}>{title}</Section.Header>}
            >
                <IconCell
                    icon={'Calendar'}
                    bgColor={'OrangeRed'}
                    subhead={t('date')}
                >
                    {intlDate}
                </IconCell>
                <IconCell
                    icon={'Milestone'}
                    bgColor={'MediumPurple'}
                    subhead={t('mileage')}
                >
                    {mileage}
                </IconCell>

                {amount && (
                    <IconCell
                        icon={'LandPlot'}
                        bgColor={'Orange'}
                        subhead={t('amount')}
                    >
                        {amount}
                    </IconCell>
                )}

                {engineHours && (
                    <IconCell
                        icon={'Clock'}
                        bgColor={'MediumPurple'}
                        subhead={t('engine_hours')}
                    >
                        {engineHours}
                    </IconCell>
                )}
            </Section>

            {description && (
                <Section>
                    <Cell subhead={t('description')}>{description}</Cell>
                </Section>
            )}
        </>
    )
})
