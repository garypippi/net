import { nl } from './nl'
import { fence } from './fence'

const r = [nl, fence]

export const p = new RegExp(
    `^(?:[^\n]+(?:\n(?!(?:${r.map(r => r.source).join('|')}))))+`
)
