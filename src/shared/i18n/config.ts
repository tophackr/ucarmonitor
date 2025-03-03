import { Locale } from './types/Locale'

export const defaultLocale = Locale.ruRU

export const defaultTimeZone = 'Europe/Moscow'

export const locales = [defaultLocale, Locale.enUS] as const

/* export const localesMap = [
    { key: Locale.ruRU, title: 'Russian', subtitle: 'Русский' },
    { key: Locale.enUS, title: 'English', subtitle: 'English' }
] */
