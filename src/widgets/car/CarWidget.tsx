import { Cell, Input, List, Section } from '@telegram-apps/telegram-ui'
import dynamic from 'next/dynamic'
import type { CarProps } from '@/entities/cars'
import { CarPreviewSkeleton } from '@/entities/cars'
import { IconCell, LinkCell } from '@/shared/ui'
import { LabelsTemp } from './LabelsTemp'

const DynamicCarPreview = dynamic(
    () => import('@/entities/cars').then(m => m.CarPreview),
    {
        loading: () => <CarPreviewSkeleton />
    }
)
const DynamicCarActionButtons = dynamic(() =>
    import('@/features/CarActionButtons').then(m => m.CarActionButtons)
)

export function CarWidget({ car }: CarProps) {
    return (
        <>
            <DynamicCarPreview car={car}>
                <LabelsTemp />
            </DynamicCarPreview>

            <List>
                <DynamicCarActionButtons />

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
