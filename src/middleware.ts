import createMiddleware from 'next-intl/middleware'
import { routing } from '@/shared/i18n'

export default createMiddleware(routing)

export const config = {
    matcher: ['/', `/(ru|en)/:path*`]
}
