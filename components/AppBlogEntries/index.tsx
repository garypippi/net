import { css } from 'goober'
import { lg } from '../../modules/css'
import { Entry } from '../../modules/markdown/types'
import { AppBlogEntriesEntry } from '../AppBlogEntriesEntry'

interface Props {
    entries: Omit<Entry,'body'>[]
}

export const AppBlogEntries = ({ entries }: Props) => {
    return (
        <div className={css`
            max-width: ${lg}px;
            margin: 0 auto;
        `}>
            {entries.map((entry, i) => (
                <AppBlogEntriesEntry
                    key={i}
                    entry={entry}
                    className={css`
                        margin-bottom: 10px;
                        @media screen and (min-width: ${lg}px) {
                            width: calc(50% - 10px);
                            &:not(:nth-of-type(2n)) {
                                margin-right: 10px;
                            }
                        }
                `}/>
            ))}
        </div>
    )
}
