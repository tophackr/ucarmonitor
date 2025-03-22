import { InlineButtons } from '@telegram-apps/telegram-ui'
import type { JSX } from 'react'
import { ActionBlock } from './ActionBlock'
import { MileageButton } from './mileage/MileageButton'

export function ButtonBlock(): JSX.Element {
    return (
        <InlineButtons
            mode={'bezeled'}
            className={'grid grid-cols-3 p-2'}
        >
            <MileageButton />

            <ActionBlock />
        </InlineButtons>
    )
}
