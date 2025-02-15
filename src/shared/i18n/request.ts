import { getLocale, getRequestConfig } from 'next-intl/server'
import { getLocales } from './get-locales'
import type { Locale } from './types'

export default getRequestConfig(async () => {
    const locale = await getLocale()

    return getLocales(locale as Locale)
})
