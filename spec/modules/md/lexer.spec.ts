import { readFileSync } from 'fs'
import { join } from 'path'
import { lexer } from '../../../modules/md/lexer'

// const md = `
// # This is test markdown
// I am test markdown.
// 
// ## This is second heading
// `
// 
const md = readFileSync(join(process.cwd(), 'blog', '20200522093307/a198e365574dc211b527ccb236d4d12c.md'))

describe('lexer', () => {
    it('should compile tokens', () => {
        console.log(lexer(`${md}`))
    })
})
