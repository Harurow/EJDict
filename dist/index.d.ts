/**
 * 辞書を検索します。
 * 索引の部分一致検索を行います。
 *
 * @param index 検索したい英単語の一部分
 * @param limit 最大検索数. デフォルト 10
 */
export declare function lookUp(index: string, limit?: number): {
    index: string;
    description: string;
}[];
/**
 * 辞書を逆引きします。
 * 説明の部分一致検索を行います。
 *
 * @param query 検索したい意味。 スペース区切りでAND検索を行う。
 * @param limit 最大検索数. デフォルト 10
 */
export declare function reverseLookUp(query: string, limit?: number): {
    index: string;
    description: string;
}[];
/**
 * 辞書を検索します。
 * 索引、説明のいずれに部分一致で検索します。
 *
 * @param query 検索したい文字列。 スペース区切りでAND検索を行う。
 * @param limit 最大検索数. デフォルト 10
 */
export declare function match(query: string, limit?: number): {
    index: string;
    description: string;
}[];
