export { InteractionContextProvider } from './lib/context/InteractionContext'
export { useInteractionContext } from './lib/context/useInteractionContext'
export { getInteractions } from './lib/store/interaction'
export { interactionsSliceReducer } from './lib/store/interaction.slice'
export { useInteractions } from './lib/store/useInteractions'
export { FuelGrade, type IFuel } from './model/Fuel'
export {
    InteractionCategory,
    type IBaseInteraction,
    type IInteraction
} from './model/Interaction'
export type { IParts } from './model/Parts'
export type {
    CategoryProps,
    InteractionIdProps,
    InteractionProps
} from './model/Props'
export type { IRepair } from './model/Repair'
export {
    TiresFormType,
    TiresType,
    WheelsType,
    type ITires
} from './model/Tires'
export { actionsRoute } from './routes/actions'
export { InteractionSkeleton } from './ui/IntegrationSkeleton'
export { InteractionCell } from './ui/InteractionCell'
