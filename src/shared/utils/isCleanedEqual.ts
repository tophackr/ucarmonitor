import isEqual from 'lodash.isequal'
import { removeEmptyValues } from './removeEmptyValues'

export function isCleanedEqual(before: object, after: object) {
    const cleanedBefore = removeEmptyValues(before)
    const cleanedAfter = removeEmptyValues(after)

    return isEqual(cleanedBefore, cleanedAfter)
}
