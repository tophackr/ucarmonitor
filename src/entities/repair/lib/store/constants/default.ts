import { type IRepair, RepairOption } from '../../../model/Repair'

const baseDefaultRepair: IRepair[] = [
    {
        option: RepairOption.engineOil,
        mileage: 10_000,
        days: 365
    },
    {
        option: RepairOption.transmissionOil,
        mileage: 10_000,
        days: 365
    },
    {
        option: RepairOption.oilFilter,
        mileage: 10_000
    },
    {
        option: RepairOption.airFilter,
        mileage: 10_000
    },
    {
        option: RepairOption.cabinFilter,
        mileage: 10_000
    },
    {
        option: RepairOption.frontBrakePads,
        mileage: 30_000,
        days: 730
    },
    {
        option: RepairOption.rearBrakePads,
        mileage: 50_000,
        days: 1_095
    },
    {
        option: RepairOption.brakeFluid,
        days: 730
    },
    {
        option: RepairOption.frontBrakeDiscs,
        mileage: 50_000,
        days: 730
    },
    {
        option: RepairOption.rearBrakeDiscs,
        mileage: 60_000,
        days: 1_095
    },
    {
        option: RepairOption.airConditionerRefill,
        mileage: 75_000
    },
    {
        option: RepairOption.sparkPlugs,
        mileage: 25_000
    },
    {
        option: RepairOption.coolant,
        days: 730
    },
    {
        option: RepairOption.alignment
    },
    {
        option: RepairOption.timingBelt,
        mileage: 60_000
    },
    {
        option: RepairOption.fuelFilter,
        mileage: 15_000
    },
    {
        option: RepairOption.transferCaseOil,
        mileage: 10_000
    },
    {
        option: RepairOption.differentialOil,
        mileage: 10_000
    },
    {
        option: RepairOption.carBattery,
        mileage: 10_000
    },
    {
        option: RepairOption.powerSteeringFluid,
        mileage: 10_000
    },
    {
        option: RepairOption.clutch,
        mileage: 50_000
    }
]

export const defaultRepair = baseDefaultRepair.map(repair => ({
    ...repair,
    default: true,
    isVisible: true
}))
