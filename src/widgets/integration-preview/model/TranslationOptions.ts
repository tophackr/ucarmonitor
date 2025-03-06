import type { Translation } from '@/shared/i18n'

export type RepairOptions =
    keyof Translation['CarActionForm']['repair_work']['options']
export type PartsOptions =
    keyof Translation['CarActionForm']['parts_work']['options']
