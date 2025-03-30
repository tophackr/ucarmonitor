'use client'

import {
    type LaunchParams,
    retrieveLaunchParams
} from '@telegram-apps/sdk-react'

export function isAppleClient(launchParams?: LaunchParams): boolean {
    if (!launchParams) {
        launchParams = retrieveLaunchParams()
    }

    return ['macos', 'ios'].includes(launchParams.tgWebAppPlatform)
}
