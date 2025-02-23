import { redirect } from 'next/navigation'
import { defaultLocale } from '@/shared/i18n'
import { pagesRoute } from '@/shared/routes'

export default function RootPage() {
    redirect(pagesRoute.cars + defaultLocale)
}
