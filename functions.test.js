import { engToMorse, morseToEng } from "./functions.js";

describe("Translate English to Morse code", () => {
    test("Should return the correct string", () => {
        expect(engToMorse("SOS")).toBe("... --- ...")
        expect(engToMorse("This is a working test")).toBe("- .... .. ... / .. ... / .- / .-- --- .-. -.- .. -. --. / - . ... -")
        expect(engToMorse("It, works. with! punctuation@")).toBe(".. - --..--- / .-- --- .-. -.- ... .-.-.- / .-- .. - .... -.-.-- / .--. ..- -. -.-. - ..- .- - .. --- -. .--.-.")
    })
})

describe("Translate Morse code to English", () => {
    test("Should return the correct string", () => {
        expect(morseToEng(".. - / .-- --- .-. -.- ... / .. -. / .-. . ...- . .-. ... .")).toBe("IT WORKS IN REVERSE")
        expect(morseToEng(".- .-.. .-.. / - .... . / - .. -- . -.-.--")).toBe("ALL THE TIME!") 
        expect(morseToEng(". ...- ...-- .-. -.-- / - .---- -- . -.-.--")).toBe("EV3RY T1ME!") 
    })
    test("Should detect incorrect input", () => {
        expect(morseToEng("...000")).toBe("Unrecognized character or word for a Morse code message")
        expect(morseToEng(".-.-.-.-")).toBe("Unrecognized character or word for a Morse code message")
    })
})