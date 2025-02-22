import ru from '../locales/ru.json'
import type { Locale } from './Locale'

export type Translation = typeof ru

export interface TranslationConfig {
    locale: Locale
    messages: Translation
}
