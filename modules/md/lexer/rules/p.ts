import { nl } from './nl'

const r = [nl]

export const p = new RegExp(
    `^(?:[^\n]+(?:\n(?!(?:${r.map(r => r.source).join('|')}))))*`
)
