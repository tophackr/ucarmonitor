import type { IFuel } from './Fuel'
import type { IParts } from './Parts'
import type { IRepair } from './Repair'
import type { ITires } from './Tires'

export interface IBaseInteraction {
    id: string
    date: Date
    mileage: number
    amount?: number
    description?: string
    //files: ?
}

type SlicedType = IFuel | IRepair | IParts | ITires

export type IInteraction = IBaseInteraction & SlicedType

export enum InteractionCategory {
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
