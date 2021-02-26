import { tick, task, Token } from './token'

export const lexer = (input: string): Token[] => {
    return tick([], task[0], input)
        .filter(token => token.content.trim().length > 0)
        .map(token => ({
            ...token,
            tokens: tick([], task[1], token.content)
                .filter(token => token.content.trim().length > 0)
        }))
    // return tick(t, u, input)
    //     .filter(token => token.content.trim().length > 0)
}

// export const lexer = (input: string): Token[] => {
//     return task.reduce<Token[]>((t, u) => {
//         return tick(t, u, input)
//     }, [])
//         .filter(token => token.content.trim().length > 0)
// }
