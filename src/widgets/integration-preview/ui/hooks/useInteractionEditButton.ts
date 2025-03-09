import { useEditButton } from '@/entities/edit'
import { actionsRoute, useInteractionContext } from '@/entities/interaction'
import { useButtonClick } from '@/shared/lib/dom'

export function useInteractionEditButton() {
    const { interaction } = useInteractionContext()

    const props = useButtonClick({
        route: actionsRoute(interaction.carId).edit(
            interaction.type,
            interaction.id
        )
    })

    useEditButton(props)
}
