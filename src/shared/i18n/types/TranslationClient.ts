import type { useTranslations } from 'next-intl'
import type { Translation } from './Translation'

export type NestedTranslationClient<T extends keyof Translation = never> =
    ReturnType<typeof useTranslations<T>>

export interface TranslationClient<T extends keyof Translation = never> {
    t: NestedTranslationClient<T>
}

export type MessageKeysTranslationClient<T extends keyof Translation = never> =
    Parameters<NestedTranslationClient<T>>[0]
