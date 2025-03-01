import { Cell, Input, List, Section } from '@telegram-apps/telegram-ui'
import { CarActionButtons } from '@/features/CarActionButtons'
import type { CarProps } from '@/entities/cars'
import { CarPreview } from '@/entities/cars'
import { IconCell, LinkCell } from '@/shared/ui'
import { LabelsTemp } from './LabelsTemp'

export function CarWidget({ car }: CarProps) {
    return (
        <>
            <CarPreview car={car}>
                <LabelsTemp />
            </CarPreview>

            <List>
                <CarActionButtons />

                <Section footer={'footer'}>
                    <Cell>123</Cell>
                    <Input
                        type={'number'}
                        before={
                            <IconCell
                                icon={'Sigma'}
                                bgColor={'OrangeRed'}
                            />
                        }
                    />
                    <LinkCell
                        href={'https://tophackr.com'}
                        icon={'Salad'}
                        bgColor={'mediumpurple'}
                    >
                        test
                    </LinkCell>
                </Section>
            </List>
        </>
    )
}
