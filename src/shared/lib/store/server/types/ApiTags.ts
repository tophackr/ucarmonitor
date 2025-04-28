export enum ApiTags {
    User = 'User',
    Car = 'Car',
    Interaction = 'Interaction',
    Repair = 'Repair',
    Part = 'Part'
}

export interface TagDescription<T extends ApiTags> {
    type: T
    id: string
}
