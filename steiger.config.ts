import fsd from '@feature-sliced/steiger-plugin'
import { defineConfig } from 'steiger'

export default defineConfig([
    ...fsd.configs.recommended
    /* {
        // disable the `public-api` rule for files in the Shared layer
        files: ['./src/shared/**'],
        rules: {
            'fsd/public-api': 'off'
        }
    } */
])
