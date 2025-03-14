import type { JSX } from 'react'
import { InfoInputs } from './InfoInputs'
import { SizeSelects } from './SizeSelects'

export function TiresSection(): JSX.Element {
    return (
        <>
            <InfoInputs />

            <SizeSelects />
        </>
    )
}
