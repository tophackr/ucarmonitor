import { Avatar, type AvatarProps } from '@telegram-apps/telegram-ui'

interface CarAvatarProps extends Omit<AvatarProps, 'src' | 'acronym'> {
    name: string
}

export function CarAvatar({ name, ...props }: CarAvatarProps) {
    return (
        <Avatar
            src={`https://img.icons8.com/color/${name.toLowerCase()}.png`}
            acronym={name.charAt(0).toUpperCase()}
            {...props}
        />
    )
}
