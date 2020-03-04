# harurow-ejdict

- これはパブリックドメインの英和辞書データです。
- This is the English-Japanese Dictionary data (Public Domain).

## 謝辞

クジラ飛行机様のデータを利用させていただいています
http://kujirahand.com/
https://github.com/kujirahand/EJDict


## 使い方

### 英➡️日

```typescript
/**
 * 辞書を検索します
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
 * 辞書を逆引きします
 * @param query 検索したい意味. スペースでAND検索
 * @param limit 最大検索数. デフォルト 10
 */
export declare function reverseLookUp(query: string, limit?: number): {
    index: string;
    description: string;
}[];
```
