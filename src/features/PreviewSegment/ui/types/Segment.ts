export interface ISegment {
    key: string
    label: string
}

export interface SegmentProps {
    segments: ISegment[]
    segment: string
    setSegment: (segment: string) => void
}
