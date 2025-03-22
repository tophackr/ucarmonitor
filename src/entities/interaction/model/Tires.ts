export interface ITiresInteraction {
    formType: TiresFormType
    tiresType?: TiresType | 0
    wheelsType?: WheelsType | 0
    brand?: string
    model?: string
    width?: string | 0
    height?: string | 0
    diameter?: string | 0
}

export enum TiresFormType {
    tires = 'tires',
    wheels = 'wheels'
}

export enum TiresType {
    summer = 'summer',
    winter = 'winter',
    allSeason = 'all_season'
}

export enum WheelsType {
    forged = 'forged',
    cast = 'cast',
    stamped = 'stamped'
}
