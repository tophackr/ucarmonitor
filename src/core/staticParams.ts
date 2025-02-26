import { routing } from '@/shared/i18n'

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }))
}
