import { dic } from './dic'


/**
 * 辞書を検索します
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
 * 辞書を逆引きします
 * @param query 検索したい意味. スペースでAND検索
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
