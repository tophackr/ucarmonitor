import { InlineButtons, Section } from '@telegram-apps/telegram-ui'
import { ActionBlock } from './ActionBlock'
import { MileageButton } from './mileage/MileageButton'

export function ButtonBlock() {
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
