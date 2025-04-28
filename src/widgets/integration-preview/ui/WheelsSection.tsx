import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import {
    type WheelInteractionData,
    WheelType,
    useInteractionContext
} from '@/entities/interaction'

export function WheelsSection(): JSX.Element {
    const t = useTranslations('CarActionForm.wheels')

    const { interaction } = useInteractionContext()
    const wheelInteraction = interaction as unknown as WheelInteractionData
    const {
        data: { brand, model, width, height, diameter }
    } = wheelInteraction

    return (
        <>
            <Section
                header={
                    <Section.Header large>
                        {t(wheelInteraction.data.wheelType)}
                    </Section.Header>
                }
            >
                {wheelInteraction.data.wheelType === WheelType.tire
                    ? wheelInteraction.data.tireType && (
                          <Cell subhead={t('seasonality.title')}>
                              {t(
                                  `seasonality.options.${wheelInteraction.data.tireType}`
                              )}
                          </Cell>
                      )
                    : wheelInteraction.data.rimType && (
                          <Cell subhead={t('type.title')}>
                              {t(
                                  `type.options.${wheelInteraction.data.rimType}`
                              )}
                          </Cell>
                      )}

                {brand && <Cell subhead={t('brand')}>{brand}</Cell>}
                {model && <Cell subhead={t('model')}>{model}</Cell>}
            </Section>

            {(width || height || diameter) && (
                <Section header={t('size')}>
                    {width && <Cell subhead={t('width')}>{width}</Cell>}
                    {height && <Cell subhead={t('height')}>{height}</Cell>}
                    {diameter && (
                        <Cell subhead={t('diameter')}>R{diameter}</Cell>
                    )}
                </Section>
            )}
        </>
    )
}
