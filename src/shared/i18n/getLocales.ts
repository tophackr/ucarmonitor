import { defaultLocale, locales } from './config'
import type { Locale } from './types/Locale'
import type { TranslationConfig } from './types/Translation'

function isDefaultLocale(locale: Locale): Locale {
    return locale === defaultLocale || !locales.includes(locale)
        ? defaultLocale
        : locale
}

export async function getLocales(
    locale: Locale = defaultLocale
): Promise<TranslationConfig> {
    const fetchMessages = await import(
        `@/shared/i18n/locales/${isDefaultLocale(locale)}.json`
    )

    return {
        locale,
        messages: fetchMessages.default
    }
}
