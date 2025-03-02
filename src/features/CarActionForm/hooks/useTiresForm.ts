import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { type ITires, TiresFormType } from '@/entities/interaction'
import { useWatchForm } from '@/shared/hooks'
import { type TiresInfoForm, type TiresSizeForm } from '../types/TiresForm'

export function useTiresForm() {
    const { watch, setValue } = useFormContext<ITires>()

    const [tiresType, setTiresType] = useState<TiresFormType>(
        TiresFormType.tires
    )

    const watchFormType = watch('formType')
    const sizeKeys: (keyof TiresSizeForm)[] = useMemo(
        () => ['width', 'height', 'diameter'],
        []
    )

    useEffect(() => {
        sizeKeys.forEach(i => setValue(i, 0))

        setValue(
            watchFormType === TiresFormType.tires ? 'tiresType' : 'wheelsType',
            0
        )
    }, [setValue, sizeKeys, watchFormType])

    const onWatchCallback = ({ formType }: TiresInfoForm) => {
        if (formType !== tiresType) {
            setTiresType(formType)
        }
    }

    useWatchForm({
        watch,
        callback: onWatchCallback
    })

    return { tiresType }
}
