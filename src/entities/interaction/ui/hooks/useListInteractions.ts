import { useMemo } from 'react'
import { useSortedInteractions } from '../../lib/store/hooks/useSortedInteractions'
import type { IInteraction } from '../../model/Interaction'

interface GroupedInteractions {
    [month: string]: IInteraction[]
}

export function useListInteractions(
    carId: string,
    slice?: number
): GroupedInteractions | IInteraction[] {
    const sortedInteractions = useSortedInteractions({ carId })

    return useMemo(
        () =>
            slice
                ? sortedInteractions.slice(0, slice)
                : sortedInteractions.reduce<GroupedInteractions>(
                      (acc, item) => {
                          const date = new Date(item.date)
                          const monthKey = `${date.getFullYear()}-${(
                              date.getMonth() + 1
                          )
                              .toString()
                              .padStart(2, '0')}`

                          if (!acc[monthKey]) {
                              acc[monthKey] = []
                          }

                          acc[monthKey].push(item)

                          return acc
                      },
                      {}
                  ),
        [sortedInteractions, slice]
    )
}
