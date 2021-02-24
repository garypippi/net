import { tokenizer, Token, Tokenizer } from '../token'

const lex = (input: string, tokenizers: Tokenizer[], tokens: Token[] = []) => {
    const push = (t: Token|null) => t && (tokens = tokens.concat(t)) && t
    const trim = (t: Token|null) => t && (input = input.substring(t.raw.length)).length + 1
    while (input)
        for (let f of tokenizers)
            if (trim(push(f(input))))
                break
    return tokens
}

export const lexer = (input: string) => {
    const tokens = lex(input, tokenizer.block)
    for (let t of tokens)
        t.tokens = lex(t.raw, tokenizer.inline)
    return tokens
}
