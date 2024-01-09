import { morseCode } from "./morseLibrary.js"
import { firstChar } from "./functions.js"

document.querySelector('#user-input').addEventListener("input", () => {
    let convertedMessage = document.querySelector('#return-message')
    convertedMessage.value = ""
    const input = document.querySelector("#user-input").value
    convertedMessage.value += firstChar(input, input[0])
})

const tableMaker = (table, columnName, start, stop) => {
    const tables = document.querySelectorAll(".tables")
    const libraryObject = Object.entries(morseCode)
    let stringToAdd = ""
    stringToAdd += `<tr><th>${columnName}</th><th>Morse Code</th></tr>`
    for (let i=start ; i <= stop ; i++) {
        stringToAdd += `<tr><td>${libraryObject[i][0]}</td><td>${libraryObject[i][1]}</td></tr>`
    }
    stringToAdd += "</table>"
    tables[table].innerHTML = stringToAdd
}

tableMaker(0, "Numbers", 0, 9)
tableMaker(1, "Letters", 10, 36)
tableMaker(2, "Characters", 36, 56)
