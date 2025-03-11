export interface ICar {
    id: string
    brand: string
    model?: string
    name?: string
    default?: boolean
    year?: Date
    fuel: CarFuel
    fuelCapacity?: number
    mileage: number
    odometerUnits: CarOdometerUnits
    engineHoursEnabled: boolean
    engineHours?: number
}

export enum CarFuel {
    Gasoline = 'gasoline',
    Gas = 'gas',
    Hybrid = 'hybrid',
    Diesel = 'diesel',
    Electric = 'electric'
}

export enum CarOdometerUnits {
    kilometer = 'kilometer',
    mile = 'mile'
}
