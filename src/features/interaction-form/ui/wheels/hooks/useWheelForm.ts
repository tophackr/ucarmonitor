import { useEffect, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { type WheelInteractionData, WheelType } from '@/entities/interaction'
import { useWatchField } from './useWatchField'

interface UseWheelFormReturn {
    wheelType: WheelType
}

export function useWheelForm(): UseWheelFormReturn {
    const { watch, setValue, getValues } =
        useFormContext<WheelInteractionData>()

    const watchWheelType = watch('data.wheelType')
    const [prevWheelType, setPrevWheelType] = useState<WheelType>(
        getValues().data.wheelType
    )

    const sizeKeys = useMemo<(keyof WheelInteractionData['data'])[]>(
        () => ['width', 'height', 'diameter'],
        []
    )

    useEffect(() => {
        if (prevWheelType !== watchWheelType) {
            sizeKeys.forEach(i => setValue(`data.${i}`, null))

            setValue(
                watchWheelType === WheelType.tire
                    ? 'data.tireType'
                    : 'data.rimType',
                null
            )

            setPrevWheelType(watchWheelType)
        }
    }, [prevWheelType, setValue, sizeKeys, watchWheelType])

    useWatchField('data.tireType')
    useWatchField('data.rimType')
    useWatchField('data.width')
    useWatchField('data.height')
    useWatchField('data.diameter')

    return { wheelType: prevWheelType }
}
