import { useIntlUnit } from '@/shared/i18n'
import { CarOdometerUnits } from '../../model/Car'

export const useIntlCarUnit = (value: number, units: CarOdometerUnits) =>
    useIntlUnit(units).format(value)
