import {randomInt} from "crypto";

const LowercaseAlphabetCharacters = "abcdefghijklmnopqrstuvwxyz";
const UppercaseAlphabetCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const AlphebeticCharacters = LowercaseAlphabetCharacters+UppercaseAlphabetCharacters;
const NumericCharacters = "0123456789";
const AlphanumericCharacters = AlphebeticCharacters+NumericCharacters;

export function MakeRandomSecureString(length:number,charset:string=AlphanumericCharacters){
    const charsetArray = charset.split("");
    const charsetArrayLength = charsetArray.length;
    let result = "";
    while(result.length<length){
        const index = randomInt(charsetArrayLength);
        result += charsetArray[index];
    }
    return result;
}