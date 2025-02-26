import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/core/**/*.{js,ts,jsx,tsx,mdx}',
        './src/views/**/*.{js,ts,jsx,tsx,mdx}',
        './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
        './src/features/**/*.{js,ts,jsx,tsx,mdx}',
        './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
        './src/shared/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            colors: {
                base: 'var(--tg-theme-bg-color)',

                secondary: 'var(--tg-theme-secondary-bg-color)',
                section: 'var(--tg-theme-section-bg-color)',
                content: 'var(--tg-theme-text-color)',

                accent: 'var(--tg-theme-accent-text-color)',
                destructive: 'var(--tg-theme-destructive-text-color)',
                hint: 'var(--tg-theme-hint-color)',
                subtitle: 'var(--tg-theme-subtitle-text-color)',
                link: 'var(--tg-theme-link-color)',

                button: 'var(--tg-theme-button-color)',
                'button-content': 'var(--tg-theme-button-text-color)',

                header: 'var(--tg-theme-header-bg-color)',
                'header-content': 'var(--tg-theme-section-header-text-color)',
                bottom: 'var(--tg-bottom-bar-color)'
            }
        }
    },
    plugins: []
} satisfies Config
