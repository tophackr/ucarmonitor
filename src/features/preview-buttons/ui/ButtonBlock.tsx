import { InlineButtons, Section } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { ActionBlock } from './ActionBlock'
import { MileageButton } from './mileage/MileageButton'

export function ButtonBlock(): JSX.Element {
    return (
        <Section>
            <InlineButtons
                mode={'bezeled'}
                className={'grid grid-cols-3 p-2'}
            >
                <MileageButton />

                <ActionBlock />
            </InlineButtons>
        </Section>
    )
}
