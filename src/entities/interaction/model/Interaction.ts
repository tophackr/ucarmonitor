import type { IFuelInteraction } from './Fuel'
import type { IPartsInteraction } from './Parts'
import type { IRepairInteraction } from './Repair'
import type { ITiresInteraction } from './Tires'

export interface IBaseInteraction {
    id: string
    carId: string
    type: InteractionCategory
    date: Date
    mileage: number
    amount?: number
    engineHours?: number
    description?: string
    //files: ?
}

type SlicedType =
    | IFuelInteraction
    | IRepairInteraction
    | IPartsInteraction
    | ITiresInteraction

export type IInteraction = IBaseInteraction & SlicedType

export enum InteractionCategory {
    mileage = 'mileage',

    parking = 'parking',
    tollRoad = 'toll-road',
    taxi = 'taxi',
    soberDriver = 'sober-driver',
    alarmSystem = 'alarm-system',

    fuel = 'fuel',

    wash = 'wash',

    maintenance = 'maintenance',
    tireService = 'tire-service',
    repair = 'repair',
    parts = 'parts',
    purchaseTires = 'purchase-tires',
    towTruck = 'tow-truck',

    insurance = 'insurance',
    tax = 'tax',
    stateInspection = 'state-inspection',
    fine = 'fine',
    carPurchase = 'car-purchase',
    loanRepayment = 'loan-repayment',
    leasing = 'leasing',

    carPurchases = 'car-purchases',
    tuning = 'tuning',
    driverSalary = 'driver-salary'
}
