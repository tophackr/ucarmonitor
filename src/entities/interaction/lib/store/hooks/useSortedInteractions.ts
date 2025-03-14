'use client'

import { useMemo } from 'react'
import type { IInteraction } from '../../../model/Interaction'
import { useInteractions } from './useInteractions'

interface UseSortedInteractionsFilterProps {
    filter: (value: IInteraction) => boolean
}

interface UseSortedInteractionsCarIdProps {
    carId: string
}

export function useSortedInteractions(
    props?: UseSortedInteractionsFilterProps | UseSortedInteractionsCarIdProps
): IInteraction[] {
    const { interactions } = useInteractions()

    return useMemo(() => {
        let interCopy: IInteraction[] = [...interactions]

        if (props) {
            if ('filter' in props) interCopy = interCopy.filter(props.filter)
            if ('carId' in props)
                interCopy = interCopy.filter(i => i.carId === props.carId)
        }

        return interCopy.sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        )
    }, [interactions, props])
}
