import messages from '../messages/ru.json'
import type { Locale } from './Locale'

export type Translation = typeof messages

export interface TranslationConfig {
    locale: Locale
    messages: Translation
}
