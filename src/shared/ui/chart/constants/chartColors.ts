import type { ColorUtility } from '../types/ColorUtility'

export const chartColors = {
    teal: {
        bg: 'bg-teal-500',
        stroke: 'stroke-teal-500',
        fill: 'fill-teal-500',
        text: 'text-teal-500'
    },
    pink: {
        bg: 'bg-pink-500',
        stroke: 'stroke-pink-500',
        fill: 'fill-pink-500',
        text: 'text-pink-500'
    },
    amber: {
        bg: 'bg-amber-500',
        stroke: 'stroke-amber-500',
        fill: 'fill-amber-500',
        text: 'text-amber-500'
    },
    violet: {
        bg: 'bg-violet-500',
        stroke: 'stroke-violet-500',
        fill: 'fill-violet-500',
        text: 'text-violet-500'
    },
    blue: {
        bg: 'bg-blue-500',
        stroke: 'stroke-blue-500',
        fill: 'fill-blue-500',
        text: 'text-blue-500'
    },
    lime: {
        bg: 'bg-lime-500',
        stroke: 'stroke-lime-500',
        fill: 'fill-lime-500',
        text: 'text-lime-500'
    },
    rose: {
        bg: 'bg-rose-500',
        stroke: 'stroke-rose-500',
        fill: 'fill-rose-500',
        text: 'text-rose-500'
    },
    indigo: {
        bg: 'bg-indigo-500',
        stroke: 'stroke-indigo-500',
        fill: 'fill-indigo-500',
        text: 'text-indigo-500'
    },
    orange: {
        bg: 'bg-orange-500',
        stroke: 'stroke-orange-500',
        fill: 'fill-orange-500',
        text: 'text-orange-500'
    },
    emerald: {
        bg: 'bg-emerald-500',
        stroke: 'stroke-emerald-500',
        fill: 'fill-emerald-500',
        text: 'text-emerald-500'
    },
    fuchsia: {
        bg: 'bg-fuchsia-500',
        stroke: 'stroke-fuchsia-500',
        fill: 'fill-fuchsia-500',
        text: 'text-fuchsia-500'
    },
    yellow: {
        bg: 'bg-yellow-500',
        stroke: 'stroke-yellow-500',
        fill: 'fill-yellow-500',
        text: 'text-yellow-500'
    },
    green: {
        bg: 'bg-green-500',
        stroke: 'stroke-green-500',
        fill: 'fill-green-500',
        text: 'text-green-500'
    },
    cyan: {
        bg: 'bg-cyan-500',
        stroke: 'stroke-cyan-500',
        fill: 'fill-cyan-500',
        text: 'text-cyan-500'
    },
    sky: {
        bg: 'bg-sky-500',
        stroke: 'stroke-sky-500',
        fill: 'fill-sky-500',
        text: 'text-sky-500'
    },
    red: {
        bg: 'bg-red-500',
        stroke: 'stroke-red-500',
        fill: 'fill-red-500',
        text: 'text-red-500'
    },
    purple: {
        bg: 'bg-purple-500',
        stroke: 'stroke-purple-500',
        fill: 'fill-purple-500',
        text: 'text-purple-500'
    }
} as const satisfies {
    [color: string]: {
        [key in ColorUtility]: string
    }
}
