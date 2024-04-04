"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeRandomSecureString = void 0;
const crypto_1 = require("crypto");
const LowercaseAlphabetCharacters = "abcdefghijklmnopqrstuvwxyz";
const UppercaseAlphabetCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const AlphebeticCharacters = LowercaseAlphabetCharacters + UppercaseAlphabetCharacters;
const NumericCharacters = "0123456789";
const AlphanumericCharacters = AlphebeticCharacters + NumericCharacters;
function MakeRandomSecureString(length, charset = AlphanumericCharacters) {
    const charsetArray = charset.split("");
    const charsetArrayLength = charsetArray.length;
    let result = "";
    while (result.length < length) {
        const index = (0, crypto_1.randomInt)(charsetArrayLength);
        result += charsetArray[index];
    }
    return result;
}
exports.MakeRandomSecureString = MakeRandomSecureString;
