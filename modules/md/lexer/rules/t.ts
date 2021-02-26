import { code } from './code'
import { a } from './a'

const r = [code, a]

export const t = new RegExp(
    `^(?:[^](?!(?:${r.map(r => r.source.substring(1)).join('|')})))+[^]`
)
