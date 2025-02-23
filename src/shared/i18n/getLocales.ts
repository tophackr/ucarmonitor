import deepmerge from 'deepmerge'
import { defaultLocale, locales } from './config'
import type { Locale } from './types/Locale'
import type { TranslationConfig } from './types/Translation'

function isNotDefaultLocale(locale: Locale): boolean {
    return locale !== defaultLocale && locales.includes(locale)
}

export async function getLocales(
    locale: Locale = defaultLocale
): Promise<TranslationConfig> {
    const [defaultMessages, userMessages] = await Promise.all([
        import('./messages/ru.json').then(m => m.default),
        isNotDefaultLocale(locale) &&
            import(`./messages/${locale}.json`).then(m => m.default)
    ])

    const mergedMessaged = userMessages
        ? deepmerge(defaultMessages, userMessages)
        : defaultMessages

    return {
        locale,
        messages: mergedMessaged
    }
}
