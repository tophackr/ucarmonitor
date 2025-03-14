import { Cell, Section } from '@telegram-apps/telegram-ui'
import { useTranslations } from 'next-intl'
import type { JSX } from 'react'
import {
    type ITires,
    TiresFormType,
    useInteractionContext
} from '@/entities/interaction'

export function TiresSection(): JSX.Element {
    const t = useTranslations('CarActionForm.tires')

    const { interaction } = useInteractionContext()
    const {
        formType,
        tiresType,
        wheelsType,
        brand,
        model,
        width,
        height,
        diameter
    } = interaction as ITires

    return (
        <>
            <Section header={t(formType)}>
                {formType === TiresFormType.tires
                    ? tiresType && (
                          <Cell subhead={t('seasonality.title')}>
                              {t(`seasonality.options.${tiresType}`)}
                          </Cell>
                      )
                    : wheelsType && (
                          <Cell subhead={t('type.title')}>
                              {t(`type.options.${wheelsType}`)}
                          </Cell>
                      )}

                {brand && <Cell subhead={t('brand')}>{brand}</Cell>}
                {model && <Cell subhead={t('model')}>{model}</Cell>}
            </Section>

            <Section header={t('size')}>
                {width && <Cell subhead={t('width')}>{width}</Cell>}
                {height && <Cell subhead={t('height')}>{height}</Cell>}
                {diameter && <Cell subhead={t('diameter')}>{diameter}</Cell>}
            </Section>
        </>
    )
}
