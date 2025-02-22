import type { getTranslations } from 'next-intl/server'
import type { Translation } from './Translation'

export type NestedTranslationServer<T extends keyof Translation = never> =
    Awaited<ReturnType<typeof getTranslations<T>>>

export interface TranslationServer<T extends keyof Translation = never> {
    t: NestedTranslationServer<T>
}

export type MessageKeysTranslationServer<T extends keyof Translation = never> =
    Parameters<NestedTranslationServer<T>>[0]
