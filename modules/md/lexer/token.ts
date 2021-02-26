import * as rules from './rules'

type T = 'nl'|'h'|'p'|'t'|'a'
type U = {type:T,content:string,matches:string[],tokens?:U[]}
type R = U|null
type C = RegExpExecArray|null
type F = (s: string) => R
export type Token = U
export type Tokenizer = F

const f = (c: C, t: T, u?: U[]) => c && ({ type: t, content: c[0], matches: c.slice(1), tokens :u })
const g = (t: R, u: U[]) => u.length - (t ? u.push(t) : u.length)

export const tick = (t: U[], u: F[], s: string): U[] => {
    return u.some(f => g(f(s), t))
        ? tuck(t, u, s = s.substring(t[t.length-1].content.length))
        : t
}
export const tuck = (t: U[], u: F[], s: string): U[] => {
    return s.length > 0
        ? tick(t, u, s)
        : t
}

export const task: F[][] = [[
    s => f(rules.nl.exec(s), 'nl'),
    s => f(rules.p.exec(s), 'p'),
    // s => f(rules.paragraph.exec(s), 'paragraph'),
    () => null
], [
    s => f(rules.a.exec(s), 'a'),
    // s => f(rules.text.exec(s), 'text'),
    () => null
]]
