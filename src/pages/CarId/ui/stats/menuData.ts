import { StatsCategory } from '@/entities/stat'
import type { KeyMenu } from '@/shared/lib/link-menu'

enum StatsGroup {
    stats = 'stats',
    calculated = 'calculated'
}

export const menuData: KeyMenu<StatsCategory>[] = [
    {
        name: StatsCategory.cost,
        icon: 'ChartPie',
        bgColor: 'Orange',
        group: StatsGroup.stats
    },
    {
        name: StatsCategory.list,
        icon: 'ListTodo',
        bgColor: 'MediumPurple',
        group: StatsGroup.stats
    },
    {
        name: StatsCategory.fuel,
        icon: 'ChartNoAxesCombined',
        bgColor: 'DodgerBlue',
        group: StatsGroup.stats
    },
    {
        name: StatsCategory.parts,
        icon: 'Bolt',
        bgColor: 'LimeGreen',
        group: StatsGroup.calculated
    },
    {
        name: StatsCategory.tripCost,
        icon: 'Caravan',
        bgColor: 'DeepPink',
        group: StatsGroup.calculated
    }
]
