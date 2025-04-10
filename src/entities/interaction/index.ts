export { useInteractionContext } from './lib/context/hooks/useInteractionContext'
export { useInteractionsInitContext } from './lib/context/hooks/useInteractionsInitContext'
export { InteractionContextProvider } from './lib/context/InteractionContextProvider'
export { InteractionsInitContextProvider } from './lib/context/InteractionsInitContextProvider'
export { useInteractions } from './lib/store/hooks/useInteractions'
export { useSortedInteractions } from './lib/store/hooks/useSortedInteractions'
export { interactionsSliceReducer } from './lib/store/interaction.slice'
export { FuelGrade, type IFuelInteraction } from './model/Fuel'
export {
    InteractionCategory,
    type IBaseInteraction,
    type IInteraction
} from './model/Interaction'
export type { IPartsInteraction } from './model/Parts'
export type {
    CategoryProps,
    InteractionIdProps,
    InteractionProps
} from './model/Props'
export type { IRepairInteraction } from './model/Repair'
export {
    TiresFormType,
    TiresType,
    WheelsType,
    type ITiresInteraction
} from './model/Tires'
export { actionsRoute } from './routes/actions'
export { InteractionList } from './ui/InteractionList'
