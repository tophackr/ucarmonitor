import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
    ...fsd.configs.recommended,
    {
        rules: {
            'fsd/insignificant-slice': 'warn'
        }
    },
    {
        files: ['./src/entities/**'],
        rules: {
            'fsd/forbidden-imports': 'off'
        }
    }
])
