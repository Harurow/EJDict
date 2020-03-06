import { dic } from './dic'

/**
 * 辞書を検索します。  
 * 索引の部分一致検索を行います。
 * 
 * @param index 検索したい英単語の一部分
 * @param limit 最大検索数. デフォルト 10
 */
export function lookUp (index: string, limit: number = 10): { index: string, description: string }[] {
    const indexUpper = index.toUpperCase()
    return dic
        .filter((items) => items[0].toUpperCase().indexOf(indexUpper) !== -1)
        .filter((_, no) => no < limit)
        .map(items => ({ index: items[0], description: items[1] }))
}

/**
 * 辞書を逆引きします。
 * 説明の部分一致検索を行います。
 * 
 * @param query 検索したい意味。 スペース区切りでAND検索を行う。
 * @param limit 最大検索数. デフォルト 10
 */
export function reverseLookUp (query: string, limit: number = 10): { index: string, description: string }[] {
    const queryUpper = query.toUpperCase()
    const condition = (desc: string) => 
        queryUpper
            .split(' ')
            .every(q => desc.indexOf(q) !== -1)
    return dic
        .filter((items) => condition(items[1].toUpperCase()))
        .filter((_, no) => no < limit)
        .map(items => ({ index: items[0], description: items[1] }))
}

/**
 * 辞書を検索します。
 * 索引、説明のいずれに部分一致で検索します。
 * 
 * @param query 検索したい文字列。 スペース区切りでAND検索を行う。
 * @param limit 最大検索数. デフォルト 10
 */
export function match (query: string, limit: number = 10): { index: string, description: string }[] {
    const queryUpper = query.toUpperCase()
    const condition = (index: string, desc: string) => 
        queryUpper
            .split(' ')
            .every(q => index.indexOf(q) !== -1 || desc.indexOf(q) !== -1)
    return dic
        .filter((items) => condition(items[0].toUpperCase(), items[1].toUpperCase()))
        .filter((_, no) => no < limit)
        .map(items => ({ index: items[0], description: items[1] }))
}
