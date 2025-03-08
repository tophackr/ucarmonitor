'use client'

import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import { memo } from 'react'
import { useInteractionContext } from '@/entities/interaction'
import { useIntlDateTime } from '@/shared/i18n'
import { IconBeforeCell } from '@/shared/ui/cell'

interface BaseSectionProps {
    title: string
}

export const BaseSection = memo(function BaseSection({
    title
}: BaseSectionProps) {
    const t = useTranslations('CarActionForm')

    const {
        interaction: { date, mileage, amount, description }
    } = useInteractionContext()

    const intlDate = useIntlDateTime(date)

    return (
        <>
            <Section
                header={<Section.Header large={true}>{title}</Section.Header>}
            >
                <Cell
                    before={
                        <IconBeforeCell
                            icon={'Calendar'}
                            bgColor={'OrangeRed'}
                        />
                    }
                    subhead={t('date')}
                >
                    {intlDate}
                </Cell>
                <Cell
                    before={
                        <IconBeforeCell
                            icon={'Milestone'}
                            bgColor={'MediumPurple'}
                        />
                    }
                    subhead={t('mileage')}
                >
                    {mileage}
                </Cell>
                {amount && (
                    <Cell
                        before={
                            <IconBeforeCell
                                icon={'LandPlot'}
                                bgColor={'Orange'}
                            />
                        }
                        subhead={t('amount')}
                    >
                        {amount}
                    </Cell>
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
