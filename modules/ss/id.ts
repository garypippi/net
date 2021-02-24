import { join, basename } from 'path'
import * as fs from 'fs'
import { promisify } from 'util'
import { ls } from '../fs/ls'
import { fm } from '../fs/fm'
import { toml } from '../md/toml'
import { converter } from '../md'
import { Post } from '../../types'

const read = promisify(fs.readFile)
const getPaths = ls(join(process.cwd(), 'blog'))
const getPath = async (id?: string) => id && getPaths.then(paths => {
    return paths.find(path => path.includes(id))
})

export const getStaticPaths = async () => {
    return ls(join(process.cwd(), 'blog')).then(paths => {
        return paths.map(path => `/${basename(path).slice(0, -3)}`)
    })
}

export const getStaticProps = async (id?: string) => {
    return getPath(id).then(async path => {
        return path && read(path)
            .then(buffer => fm(buffer.toString()))
            .then(([attr, body]): Post => ({
                attr: toml(attr),
                body: converter.makeHtml(body),
                rawBody: body
            }))
    })
}
