export interface IFuelInteraction {
    fuelGrade: FuelGrade
    capacity?: number
    price?: number
    beforeRefueling: number
    afterRefueling: number
    capacityFull?: boolean
}

export enum FuelGrade {
    AI80 = 'ai80',
    AI92 = 'ai92',
    AI95 = 'ai95',
    AI95Plus = 'ai95_plus',
    AI98 = 'ai98',
    AI98Plus = 'ai98_plus',
    AI100 = 'ai100',
    Diesel = 'diesel',
    DieselPlus = 'diesel_plus',
    Gas = 'gas',
    Electric = 'electric'
}
