# harurow-ejdict

[![Build Status](https://dev.azure.com/motoharucamellia/EJDict/_apis/build/status/Harurow.EJDict?branchName=master)](https://dev.azure.com/motoharucamellia/EJDict/_build/latest?definitionId=2&branchName=master)
[![Build Status](https://travis-ci.org/Harurow/EJDict.svg?branch=master)](https://travis-ci.org/Harurow/EJDict)
[![codecov](https://codecov.io/gh/Harurow/EJDict/branch/master/graph/badge.svg)](https://codecov.io/gh/Harurow/EJDict)

英和辞書。辞書はパブリックドメインの英和辞書 [
ejdic-hand](https://kujirahand.com/web-tools/EJDictFreeDL.php)。

## 謝辞

クジラ飛行机様のデータを利用させていただいています
http://kujirahand.com/
https://github.com/kujirahand/EJDict


## 使い方

### 英➡️日

```typescript
/**
 * 辞書を検索します。  
 * 索引の部分一致検索を行います。
 * 
 * @param index 検索したい英単語の一部分
 * @param limit 最大検索数. デフォルト 10
 */
function lookUp(index: string, limit?: number): {
    index: string;
    description: string;
}[]
```

### 日➡️英

```typescript
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
```

### 英/日

```typescript
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
```

