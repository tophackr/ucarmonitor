import type { JSX } from 'react'

export interface ISegment {
    key: string
    label: string
    Component: () => JSX.Element
}

export interface SegmentProps {
    segments: ISegment[]
    defaultSegment: string
}
