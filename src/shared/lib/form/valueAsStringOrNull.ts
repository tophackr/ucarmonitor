export const valueAsStringOrNull = (value?: string): string | null =>
    value && value.length ? value : null
