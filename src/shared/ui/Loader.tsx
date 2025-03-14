import Image from 'next/image'
import type { JSX } from 'react'

export function Loader(): JSX.Element {
    return (
        <div className={'flex justify-center items-center min-h-screen'}>
            <Image
                src={'/images/Duck-Loading.webp'}
                alt={'Loading...'}
                width={144}
                height={144}
                unoptimized={true}
                priority={true}
            />
        </div>
    )
}
