import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useWatchForm } from '@/shared/hooks'
import type { SizesForm } from '../types/SizesForm'
import { type TiresForm, TiresFormType } from '../types/TiresForm'

export function useTiresForm() {
    const { watch, setValue } = useFormContext<TiresForm & SizesForm>()

    const [tiresType, setTiresType] = useState<TiresFormType>(
        TiresFormType.tires
    )

    const watchTiresType = watch('type')
    const sizeKeys: (keyof SizesForm)[] = useMemo(
        () => ['width', 'height', 'diameter'],
        []
    )

    useEffect(() => {
        sizeKeys.forEach(i => setValue(i, 0))

        setValue(
            watchTiresType === TiresFormType.tires ? 'tiresType' : 'wheelsType',
            0
        )
    }, [setValue, sizeKeys, watchTiresType])

    const onWatchCallback = ({ type }: TiresForm) => {
        if (type !== tiresType) {
            setTiresType(type)
        }
    }

    useWatchForm({
        watch,
        callback: onWatchCallback
    })

    return { tiresType }
}
