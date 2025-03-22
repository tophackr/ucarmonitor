export interface IRepair {
    option: RepairOption
    mileage?: number
    days?: number
    default?: boolean
    isVisible?: boolean
}

export enum RepairOption {
    engineOil = 'engine_oil',
    transmissionOil = 'transmission_oil',
    oilFilter = 'oil_filter',
    airFilter = 'air_filter',
    cabinFilter = 'cabin_filter',
    frontBrakePads = 'front_brake_pads',
    rearBrakePads = 'rear_brake_pads',
    brakeFluid = 'brake_fluid',
    frontBrakeDiscs = 'front_brake_discs',
    rearBrakeDiscs = 'rear_brake_discs',
    airConditionerRefill = 'air_conditioner_refill',
    sparkPlugs = 'spark_plugs',
    coolant = 'coolant',
    alignment = 'alignment',
    timingBelt = 'timing_belt',
    fuelFilter = 'fuel_filter',
    transferCaseOil = 'transfer_case_oil',
    differentialOil = 'differential_oil',
    carBattery = 'car_battery',
    powerSteeringFluid = 'power_steering_fluid',
    clutch = 'clutch'
}
