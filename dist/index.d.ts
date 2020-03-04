/**
 * 辞書を検索します
 * @param index 検索したい英単語の一部分
 * @param limit 最大検索数. デフォルト 10
 */
export declare function lookUp(index: string, limit?: number): {
    index: string;
    description: string;
}[];
/**
 * 辞書を逆引きします
 * @param query 検索したい意味. スペースでAND検索
 * @param limit 最大検索数. デフォルト 10
 */
export declare function reverseLookUp(query: string, limit?: number): {
    index: string;
    description: string;
}[];
/**
 * 辞書を検索します
 * index と description の両方を検索します
 * @param query 検索したい意味. スペースでAND検索
 * @param limit 最大検索数. デフォルト 10
 */
export declare function match(query: string, limit?: number): {
    index: string;
    description: string;
}[];
