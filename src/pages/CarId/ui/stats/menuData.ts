import type { KeyMenu } from '@/shared/lib/link-menu'
import { StatsGroup, StatsMenu } from './types/StatsMenu'

export const menuData: KeyMenu<StatsMenu>[] = [
    {
        name: StatsMenu.cost,
        icon: 'ChartPie',
        bgColor: 'Orange',
        group: StatsGroup.stats
    },
    {
        name: StatsMenu.list,
        icon: 'ListTodo',
        bgColor: 'MediumPurple',
        group: StatsGroup.stats
    },
    {
        name: StatsMenu.fuel,
        icon: 'ChartNoAxesCombined',
        bgColor: 'DodgerBlue',
        group: StatsGroup.stats
    },
    {
        name: StatsMenu.parts,
        icon: 'Bolt',
        bgColor: 'LimeGreen',
        group: StatsGroup.calculated
    },
    {
        name: StatsMenu.tripCost,
        icon: 'Caravan',
        bgColor: 'DeepPink',
        group: StatsGroup.calculated
    }
]
