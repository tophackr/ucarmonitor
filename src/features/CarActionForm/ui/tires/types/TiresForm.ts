export interface TiresForm {
    type: TiresFormType
    tiresType?: TiresType | 0
    wheelsType?: WheelsType | 0
    brand?: string
    model?: string
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
