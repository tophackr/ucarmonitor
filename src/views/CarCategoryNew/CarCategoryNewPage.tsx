import { CarActionForm } from '@/features/CarActionForm'
import type { CategoryProps } from '@/entities/interaction'
import type { ParamsProps } from '@/shared/types'
import { BackButton } from '@/shared/ui'

export async function CarCategoryNewPage({
    params
}: ParamsProps<CategoryProps>) {
    const { category } = await params

    return (
        <>
            <BackButton />

            <CarActionForm category={category} />
        </>
    )
}
