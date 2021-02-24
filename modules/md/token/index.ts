type T = 'paragraph'|'heading'|'text'|'space'
type U = {type:T,raw:string,tokens?:U[]}
type R = U|null
type F = (s: string) => R
export type Token = U
export type Tokenizer = F

const tokenize = (cap: RegExpExecArray|null, type: T): R => cap && ({
    type,
    raw: cap[0]
})
const error = () => {
    throw new Error
}

export const tokenizer: {block:F[],inline:F[]} = {
    block: [
        s => tokenize(/^(?: *(?:\n|$))+/.exec(s), 'space'),
        s => tokenize(/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/.exec(s), 'heading'),
        s => tokenize(/^([^\n]+(?:\n(?!(?: {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)) +\n)[^\n]+)*)/.exec(s), 'paragraph'),
        error
    ],
    inline: [
        // s => tokenize(/^(#+) (.+)\n?$/.exec(s), 'heading'),
        s => tokenize(/[^]+/.exec(s), 'text'),
        error
    ]
}
