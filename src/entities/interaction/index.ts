export {
    useCreateInteractionMutation,
    useDeleteInteractionMutation,
    useFindAllInteractionsQuery,
    useFindOneInteractionQuery,
    useUpdateInteractionMutation
} from './api/interactionApi'
export { useInteractionContext } from './lib/context/hooks/useInteractionContext'
export { InteractionContextProvider } from './lib/context/InteractionContextProvider'
export { FuelGrade } from './model/FuelInteractionDto'
export {
    InteractionCategory,
    type FuelInteractionData,
    type InteractionReqData,
    type InteractionResData,
    type PartInteractionData,
    type RepairInteractionData,
    type WheelInteractionData
} from './model/InteractionDto'
export type {
    CategoryProps,
    InteractionIdProps,
    InteractionProps
} from './model/Props'
export { RimType, TireType, WheelType } from './model/WheelInteractionDto'
export { actionsRoute } from './routes/actions'
export { InteractionFormSkeleton } from './ui/InteractionFormSkeleton'
export { InteractionList } from './ui/InteractionList'
