import { useCallback } from 'react'
import { type RepairsProps, useRepairs } from '@/entities/repair'
import { removeEmptyValues } from '@/shared/lib/lodash'

interface UseSavePartsReturns {
    saveCallback: (data: RepairsProps) => void
}

export function useSaveParts(): UseSavePartsReturns {
    const { setRepairsWithCloud } = useRepairs()

    const saveCallback = useCallback(
        (data: RepairsProps) => {
            const emptyData = removeEmptyValues(data)

            setRepairsWithCloud(emptyData.repairs)
        },
        [setRepairsWithCloud]
    )

    return { saveCallback }
}
