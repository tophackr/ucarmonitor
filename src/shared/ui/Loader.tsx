import Image from 'next/image'

export function Loader() {
    return (
        <div className={'flex justify-center items-center min-h-screen'}>
            <Image
                src={'/images/Duck-Loading.webp'}
                alt={'Loading...'}
                width={144}
                height={144}
                unoptimized={true}
            />
        </div>
    )
}
