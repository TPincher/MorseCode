import { morseCode } from "./morseLibrary.js"

export const firstChar = (chars, char1) => {
    if ((
        char1 === "-") || (char1 === "." 
    )) {
        return morseToEng(chars)
    } else {
        return engToMorse(chars)
    }

}

export const engToMorse = (chars) => {
    const message = chars
    const splitMessage = message.toUpperCase().split("")
    let returnMessage = ""
    splitMessage.map((letter) => {
        if (Object.hasOwn(morseCode, letter)) {
            returnMessage += `${(morseCode[letter])} `
        }
    })
    return returnMessage.trim()
}

export const morseToEng = (chars) => {
    const message = chars
    const splitMessage = message.trim().split(" ")
    let returnMessage = ""
    splitMessage.map((letter) => {
        const key = Object.keys(morseCode).find(key => morseCode[key] === letter);
        returnMessage += key
    })
    return returnMessage.includes("undefined") ? "Unrecognized character or word for a Morse code message" : returnMessage
}