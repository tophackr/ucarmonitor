import { defaultLocale, locales } from './config'
import type { Locale, TranslationConfig } from './types'

function isDefaultLocale(locale: Locale): Locale {
    return locale === defaultLocale || !locales.includes(locale)
        ? defaultLocale
        : locale
}

export async function getLocales(
    locale: Locale = defaultLocale
): Promise<TranslationConfig> {
    const fetchMessages = await import(
        `@public/locales/${isDefaultLocale(locale)}.json`
    )

    return {
        locale,
        messages: fetchMessages.default
    }
}
