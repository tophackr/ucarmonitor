import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const Layers = ['app', 'pages', 'widgets', 'features', 'entities', 'shared']

const getLowerLayers = layer => Layers.slice(Layers.indexOf(layer) + 1)

const eslintConfig = [
    ...compat.config({
        extends: [
            'plugin:import/errors',
            'plugin:import/warnings',
            'plugin:import/typescript',
            'plugin:boundaries/recommended',
            'next/core-web-vitals',
            'next/typescript',
            'prettier'
        ],
        plugins: ['@feature-sliced/eslint-plugin-messages', 'boundaries'],
        processor: '@feature-sliced/messages/fs',
        settings: {
            'import/resolver': { typescript: {} },
            'boundaries/elements': [
                {
                    type: 'cross_entities',
                    pattern: 'entities/*/@x/**'
                },
                ...Layers.map(layer => ({
                    type: layer,
                    pattern: `${layer}/*`
                }))
            ],
            'boundaries/ignore': ['**/*.test.*']
        },
        rules: {
            'no-restricted-imports': [
                'error',
                {
                    patterns: Layers.flatMap(layer => [
                        {
                            message:
                                'Private imports are prohibited, use public imports instead',
                            group: [
                                `@/${layer}/*${layer === 'app' ? '*' : layer === 'shared' ? '/*/**' : '/**'}`
                            ]
                        },
                        {
                            message:
                                'Prefer absolute imports instead of relatives (for root modules)',
                            group: [`../**/${layer}`]
                        }
                    ])
                }
            ],
            'no-restricted-imports': [
                'error',
                {
                    name: 'next/link',
                    message: 'Please import from `@/i18n/routing` instead.'
                },
                {
                    name: 'next/navigation',
                    importNames: [
                        'redirect',
                        'permanentRedirect',
                        'useRouter',
                        'usePathname'
                    ],
                    message: 'Please import from `@/i18n/routing` instead.'
                }
            ],
            'boundaries/element-types': [
                'error',
                {
                    default: 'disallow',
                    message:
                        '"${file.type}" is not allowed to import "${dependency.type}" | See rules: https://feature-sliced.design/docs/reference/layers/overview ',
                    rules: [
                        ...Layers.map(layer => ({
                            from: layer,
                            allow: getLowerLayers(layer)
                        })),
                        {
                            from: 'entities',
                            allow: 'cross_entities'
                        },
                        {
                            from: 'shared',
                            allow: 'shared'
                        },
                        {
                            from: 'app',
                            allow: 'app'
                        }
                    ]
                }
            ]
        },
        overrides: [
            {
                files: ['**/*.test.*'],
                rules: { 'boundaries/element-types': 'off' }
            }
        ]
    })
]

export default eslintConfig
