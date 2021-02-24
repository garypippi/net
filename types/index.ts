export interface Post {
    attr: PostAttr
    body: string
    [key:string]: any
}
export interface PostAttr {
    title: string
    date: string
    tags: string[]
}
