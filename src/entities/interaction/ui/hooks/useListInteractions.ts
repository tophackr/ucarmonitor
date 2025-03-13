import { useCallback } from 'react'
import { useInteractions } from '../../lib/store/useInteractions'
import type { IInteraction } from '../../model/Interaction'

interface GroupedInteractions {
    [month: string]: IInteraction[]
}

export function useListInteractions(
    carId: string,
    slice?: number
): GroupedInteractions | IInteraction[] {
    const { interactions } = useInteractions()

    const callback = useCallback(
        (slice?: number) => {
            const filterSortInteractions = [...interactions]
                .filter(inter => inter.carId === carId)
                .sort(
                    (a, b) =>
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                )

            return slice
                ? filterSortInteractions.slice(0, slice)
                : filterSortInteractions.reduce<GroupedInteractions>(
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
                  )
        },
        [carId, interactions]
    )

    return callback(slice)
}
