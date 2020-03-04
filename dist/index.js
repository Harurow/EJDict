"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dic_1 = require("./dic");
/**
 * 辞書を検索します
 * @param index 検索したい英単語の一部分
 * @param limit 最大検索数. デフォルト 10
 */
function lookUp(index, limit) {
    if (limit === void 0) { limit = 10; }
    var indexUpper = index.toUpperCase();
    return dic_1.dic
        .filter(function (items) { return items[0].toUpperCase().indexOf(indexUpper) !== -1; })
        .filter(function (_, no) { return no < limit; })
        .map(function (items) { return ({ index: items[0], description: items[1] }); });
}
exports.lookUp = lookUp;
/**
 * 辞書を逆引きします
 * @param query 検索したい意味. スペースでAND検索
 * @param limit 最大検索数. デフォルト 10
 */
function reverseLookUp(query, limit) {
    if (limit === void 0) { limit = 10; }
    var queryUpper = query.toUpperCase();
    var condition = function (desc) {
        return queryUpper
            .split(' ')
            .every(function (q) { return desc.indexOf(q) !== -1; });
    };
    return dic_1.dic
        .filter(function (items) { return condition(items[1].toUpperCase()); })
        .filter(function (_, no) { return no < limit; })
        .map(function (items) { return ({ index: items[0], description: items[1] }); });
}
exports.reverseLookUp = reverseLookUp;
/**
 * 辞書を検索します
 * index と description の両方を検索します
 * @param query 検索したい意味. スペースでAND検索
 * @param limit 最大検索数. デフォルト 10
 */
function match(query, limit) {
    if (limit === void 0) { limit = 10; }
    var queryUpper = query.toUpperCase();
    var condition = function (index, desc) {
        return queryUpper
            .split(' ')
            .every(function (q) { return index.indexOf(q) !== -1 || desc.indexOf(q) !== -1; });
    };
    return dic_1.dic
        .filter(function (items) { return condition(items[0].toUpperCase(), items[1].toUpperCase()); })
        .filter(function (_, no) { return no < limit; })
        .map(function (items) { return ({ index: items[0], description: items[1] }); });
}
exports.match = match;
