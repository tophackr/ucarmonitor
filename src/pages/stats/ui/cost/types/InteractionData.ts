export interface TotalCountProps {
    totalCount: number
}

interface DataProps {
    data: [string, number][]
}

export type InteractionDataProps = TotalCountProps & DataProps
