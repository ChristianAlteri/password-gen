
// assigning the user variables to our variables
const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeSymbolsElement = document.getElementById("includeSymbols")
const includeNumbersElement = document.getElementById("includeNumbers")
const form = document.getElementById("passwordGeneratorForm")

// here we used the ASCII codes as our letter range
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97,122)
const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65,90)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33,47)

// listen for changes the user inputs
characterAmountNumber.addEventListener("input", syncCharacterAmount)
characterAmountRange.addEventListener("input", syncCharacterAmount)

// Parsing in the user variables to our generatePassword function. 

form.addEventListener("submit", e => {
    e.preventDefault()
    const characterAmount = characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const includeNumbers = includeNumbersElement.checked
    // after taking the user input and assigning them to variables we parse them all into a function called generatePassword
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
})

// create the generatePassword function
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    // get from ASCII codes "A"
    // String.fromCharCode(65)
    console.log(characterAmount);
}

// Loop and append characters the length of user input into an empty array where our password will be stored
function arrayFromLowToHigh(low, high) {
    const array = []
    // iterates length of user input
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
}


// sync the slider with the input box
function syncCharacterAmount(e) {
    const value = e.target.value
    characterAmountNumber.value = value
    characterAmountRange.value = value
}