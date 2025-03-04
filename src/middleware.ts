import createMiddleware from 'next-intl/middleware'
import type { NextRequest } from 'next/server'
import { locales, routing } from '@/shared/i18n'

const handleI18nRouting = createMiddleware(routing)

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    const shouldHandle =
        pathname === '/' ||
        new RegExp(`^/(${locales.join('|')})(/.*)?$`).test(pathname)

    if (!shouldHandle) {
        return
    }

    return handleI18nRouting(request)
}
