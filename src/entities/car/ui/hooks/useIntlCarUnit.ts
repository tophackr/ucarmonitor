import { useIntlUnit } from '@/shared/i18n'
import type { OdometerUnits } from '../../model/CarDto'

export const useIntlCarUnit = (value: number, units: OdometerUnits) =>
    useIntlUnit(units).format(value)
