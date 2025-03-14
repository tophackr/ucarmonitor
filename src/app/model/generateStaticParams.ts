import { type LocaleProps, routing } from '@/shared/i18n'

type StaticParams = LocaleProps[]

export function generateStaticParams(): StaticParams {
    return routing.locales.map(locale => ({ locale }))
}
