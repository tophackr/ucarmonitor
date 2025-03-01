import { CarActionForm } from '@/features/CarActionForm'
import { type CarCategoryProps } from '@/entities/cars'
import type { ParamsProps } from '@/shared/types'
import { BackButton } from '@/shared/ui'

export async function CarCategoryNewPage({
    params
}: ParamsProps<CarCategoryProps>) {
    const { category } = await params

    return (
        <>
            <BackButton />

            <CarActionForm category={category} />
        </>
    )
}
