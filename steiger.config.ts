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
    },
    {
        files: [
            './src/**/hooks/*',
            './src/shared/types/*',
            './src/shared/utils/*'
        ],
        rules: {
            'fsd/segments-by-purpose': 'off'
        }
    }
])
