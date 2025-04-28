import type { CommonRepairResData } from './CommonRepairDto'
import type { RepairResData } from './RepairDto'

export interface RepairIdProps {
    repairId: string
}

export interface RepairProps {
    repair: RepairResData
}

export interface CommonRepairProps {
    commonRepair: CommonRepairResData
}

export interface RepairsProps {
    repairs: RepairResData[]
}
