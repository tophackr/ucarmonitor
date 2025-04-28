import { RepairOption } from './RepairDto'

const repairOptions = Object.values(RepairOption)

export function isRepair(value: string): false

export function isRepair(value: RepairOption): true

export function isRepair(value: string | RepairOption): boolean {
    return repairOptions.includes(value as RepairOption)
}
