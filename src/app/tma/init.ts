import {
    backButton,
    initData,
    init as initSDK,
    isConcurrentCallError,
    isFunctionNotAvailableError,
    miniApp,
    setDebug,
    settingsButton,
    targetOrigin,
    viewport
} from '@telegram-apps/sdk-react'

/**
 * Initializes the application and configures its dependencies.
 */
export function init(debug: boolean): void {
    // Set @telegram-apps/sdk-react debug mode.
    setDebug(debug)
    targetOrigin.set('https://platformer-hq.github.io')

    // Initialize special event handlers for Telegram Desktop, Android, iOS, etc.
    // Also, configure the package.
    initSDK()

    // Mount all components used in the project.
    if (backButton.isSupported()) backButton.mount()
    if (settingsButton.mount.isAvailable()) settingsButton.mount()

    if (!miniApp.isMounted())
        miniApp.mount().catch(error => {
            if (!isConcurrentCallError(error)) throw error
        })

    initData.restore()

    if (!viewport.isMounted()) {
        void viewport
            .mount()
            .catch(error => {
                if (!isConcurrentCallError(error)) throw error
            })
            .then(() => {
                if (!viewport.isCssVarsBound()) viewport.bindCssVars()
            })
            .catch(error => {
                if (!isFunctionNotAvailableError(error)) {
                    console.error(
                        'Something went wrong mounting the viewport',
                        error
                    )
                }
            })
    }

    // Add Eruda if needed.
    if (debug) {
        import('eruda').then(lib => lib.default.init()).catch(console.error)
    }
}
