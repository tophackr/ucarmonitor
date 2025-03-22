'use client'

import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useCallback } from 'react'
import { useActions, useAppSelector } from '@/shared/lib/store'
import type { IRepair } from '../../../model/Repair'
import { setRepairs as setRepairsCloud } from '../repair'
import { repairsSliceActions, selectRepairs } from '../repair.slice'

interface UseRepairsReturn {
    repairs: IRepair[]
    setRepairs: ActionCreatorWithPayload<IRepair[], 'repair/setRepairs'>
    setRepairsWithCloud: (items: IRepair[]) => Promise<void>
}

export function useRepairs(): UseRepairsReturn {
    const repairs = useAppSelector(selectRepairs)
    const { setRepairs } = useActions(repairsSliceActions)

    const setRepairsWithCloud = useCallback(
        async (items: IRepair[]) => {
            setRepairs(items)
            await setRepairsCloud(items)
        },
        [setRepairs]
    )

    return {
        repairs,
        setRepairs,
        setRepairsWithCloud
    }
}
