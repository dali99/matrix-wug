"use strict";
exports.__esModule = true;
var fs = require("fs");
var yaml = require("js-yaml");
var OuterXRegExp = require("xregexp");
var regex = OuterXRegExp("(?:(^|[`\\p{White_Space}]))   # must be preceded by whitespace or surrounded by code brackets\n  ([A-Za-z]*)                     # key, to lower (2)\n  ([/[])                          # bracket left  (3)\n  (\\S|\\S.*?\\S)                 # body          (4)\n  ([/\\]])                        # bracket right (5)\n  (?=$|[`\\p{White_Space}\\pP])  # must be followed by a white space or punctuation", "gmx");
var defaultMatchAction = function (left, match, right) { return left + match + right; };
var matchType = {
    p: {
        join: function (_, match) { return "*" + match; },
        keys: readKeys("./x2i/apie-keys.yaml")
    },
    x: {
        keys: readKeys("./x2i/x2i-keys.yaml")
    },
    z: {
        keys: readKeys("./x2i/z2i-keys.yaml")
    }
};
/**
 * Read translation keys from file. Escapes strings first.
 *
 * @param fpath File to key definitions. (yaml, utf8)
 * @returns Compiled keys.
 */
function readKeys(fpath) {
    return yaml
        .safeLoad(fs.readFileSync(fpath, "utf8"))
        .map(compileKey)
        .filter(Boolean);
}
/**
 * Compiles a plain object into a regexp thing.
 *
 * @param entry Regex and replacement pair, or delimited match object.
 */
function compileKey(entry) {
    if (Array.isArray(entry)) {
        var key = entry[0], val = entry[1];
        return [OuterXRegExp(OuterXRegExp.escape(key)), val, "all"];
    }
    // don't escape key
    if ("raw" in entry) {
        var _a = entry.raw, key = _a[0], val = _a[1];
        return [OuterXRegExp(key), val, "all"];
    }
    // is a dict
    try {
        var _b = entry.delimiters, left = _b[0], right = _b[1], translations_1 = entry.translations;
        return [
            OuterXRegExp(OuterXRegExp.escape(left) + "(?<inside>.*?)" + OuterXRegExp.escape(right)),
            function (m) { return OuterXRegExp.replaceEach(m.inside, translations_1.map(compileKey)); },
            "all"
        ];
    }
    catch (e) {
        console.log(entry + " is not an array or a proper object, ignoring");
    }
}
/**
 * Convert four-tuple of Strings into a specified "official" representation
 *
 * @param key What kind of conversion key is appropriate
 * @param left Left bracket
 * @param match Body
 * @param right Right bracket
 * @returns Converted item, if any.
 */
function force(key, left, match, right) {
    var lowerKey = key.toLowerCase();
    if (!(lowerKey in matchType))
        return;
    var _a = matchType[lowerKey], keys = _a.keys, join = _a.join;
    if (keys) {
        var action = join || defaultMatchAction;
        // need to use `as (RegExp | string)[][]` because the provided typings are too generic
        return action(left, OuterXRegExp.replaceEach(match, keys), right);
    }
}
exports.force = force;
/**
 * Grab all x2i strings in message string.
 *
 * @param content Full message that may or may not contain x2i strings
 * @returns Converted representations
 */
function x2i(content) {
    var results = [];
    OuterXRegExp.forEach(content, regex, function (match) {
        var parts = match.slice(2, 6);
        if (parts.length === 4) {
            var k = parts[0], l = parts[1], m = parts[2], r = parts[3];
            var converted = force(k, l, m, r); // eg x, [, text, ]
            if (converted) {
                results.push(converted);
            }
        }
    });
    return results.join(" ");
}
exports["default"] = x2i;
