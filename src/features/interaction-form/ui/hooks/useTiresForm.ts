import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { type ITires, TiresFormType } from '@/entities/interaction'
import { useWatchForm } from '@/shared/ui/form'
import { type TiresInfoForm, type TiresSizeForm } from '../types/TiresForm'

interface UseTiresFormReturn {
    tiresType: TiresFormType
}

export function useTiresForm(): UseTiresFormReturn {
    const { watch, setValue } = useFormContext<ITires>()
    const watchFormType = watch('formType')

    const isFirstRender = useRef(true)

    const [tiresType, setTiresType] = useState<TiresFormType>(
        TiresFormType.tires
    )
    const [prevFormType, setPrevFormType] = useState(watchFormType)

    const sizeKeys: (keyof TiresSizeForm)[] = useMemo(
        () => ['width', 'height', 'diameter'],
        []
    )

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        if (prevFormType !== watchFormType) {
            sizeKeys.forEach(i => setValue(i, 0))

            setValue(
                watchFormType === TiresFormType.tires
                    ? 'tiresType'
                    : 'wheelsType',
                0
            )

            setPrevFormType(watchFormType)
        }
    }, [prevFormType, setValue, sizeKeys, watchFormType])

    const onWatchCallback = useCallback(
        ({ formType }: TiresInfoForm) => {
            if (formType !== tiresType) {
                setTiresType(formType)
            }
        },
        [tiresType]
    )

    useWatchForm({
        watch,
        callback: onWatchCallback
    })

    return { tiresType }
}
