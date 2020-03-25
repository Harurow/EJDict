import { dict } from './dict'

interface Result {
    word: string
    description: string
}

function toResults(items: string[][]): Result[] {
    return items.map(i => ({
        word: i[0],
        description: i[1],
    }));
}

/**
 * 辞書を検索します。  
 * 索引の部分一致検索を行います。
 * 
 * @param partOfWord 検索したい英単語の一部分
 * @param limit 最大検索数. デフォルト 10
 */
export function lookUp (partOfWord: string, limit: number = 10): Result[] {
    const upperPartOfWord = partOfWord.toUpperCase()

    let rest = limit;

    const startsWith = (word: string) => {
        if (rest <= 0) return false

        const isMatched = word.startsWith(upperPartOfWord)

        if (isMatched) rest--

        return isMatched
    }

    const matchGroupA = dict.filter(items => startsWith(items[0].toUpperCase()))

    if (rest <= 0) {
        return toResults(matchGroupA)
    }

    const partialMatch = (x: string[]) => {
        if (rest <= 0) return false

        const isMatched = x[0].toUpperCase().indexOf(upperPartOfWord) > 0

        if (isMatched) rest--
        
        return isMatched
    }

    return toResults([
        ...matchGroupA,
        ...dict.filter(partialMatch)])
}

/**
 * 辞書を逆引きします。
 * 説明の部分一致検索を行います。
 * 
 * @param query 検索したい意味。 スペース区切りでAND検索を行う。
 * @param limit 最大検索数. デフォルト 10
 */
export function reverseLookUp (query: string, limit: number = 10): Result[] {
    const queryUpper = query.toUpperCase()

    let rest = limit;

    const condition = (desc: string) => {
        if (rest <= 0) return false

        const isMatched = queryUpper
            .split(' ')
            .every(q => desc.indexOf(q) !== -1)

        if (isMatched) rest--

        return isMatched
    }

    return toResults(
        dict.filter((items) => condition(items[1].toUpperCase())))
}

/**
 * 辞書を検索します。
 * 索引、説明のいずれに部分一致で検索します。
 * 
 * @param query 検索したい文字列。 スペース区切りでAND検索を行う。
 * @param limit 最大検索数. デフォルト 10
 */
export function match (query: string, limit: number = 10): Result[] {
    const queryUpper = query.toUpperCase()

    let rest = limit;

    const startsWith = (word: string) =>  {
        if (rest <= 0) return false
       
        const isMatched = queryUpper
            .split(' ')
            .some(q => word.startsWith(q))

        if (isMatched) rest--
        
        return isMatched
    }

    const matchGroupA = dict.filter(items => startsWith(items[0].toUpperCase()))

    if (rest <= 0) {
        return toResults(matchGroupA)
    }

    const partialMatch = (word: string, desc: string) => {
        if (rest <= 0) return false

        const isMatched = queryUpper
            .split(' ')
            .every(q => word.indexOf(q) !== -1 || desc.indexOf(q) !== -1)
            && queryUpper
            .split(' ')
            .every(q => !word.startsWith(q))

        if (isMatched) rest--
        
        return isMatched
    }

    return toResults([
        ...matchGroupA,
        ...dict.filter((items) => partialMatch(items[0].toUpperCase(), items[1].toUpperCase()))
    ])
}
