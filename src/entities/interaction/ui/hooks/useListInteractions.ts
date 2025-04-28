import { useMemo } from 'react'
import { useFindAllInteractionsQuery } from '../../api/interactionApi'
import type { InteractionResData } from '../../model/InteractionDto'

interface GroupedInteractions {
    [month: string]: InteractionResData[]
}

export function useListInteractions(
    carId: string,
    slice?: number
): GroupedInteractions | InteractionResData[] {
    const {
        data: interactions,
        isLoading,
        isError,
        error
    } = useFindAllInteractionsQuery({ carId })

    if (isError) console.error('useListInteractions', error)

    return useMemo(() => {
        if (isLoading || !interactions) return []

        return slice
            ? interactions.slice(0, slice)
            : interactions.reduce<GroupedInteractions>((acc, item) => {
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
              }, {})
    }, [interactions, isLoading, slice])
}
