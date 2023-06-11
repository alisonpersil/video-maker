const readline = require('readline-sync')
function start() {
const content = {}

content.searchTerm = askAndReturnSearchTerm()

function askAndReturnSearchTerm() {
    return readline.question('Type a Wikipedia search term: ')
}

function askAndReturnPrefix() {
    const prefixes = ['Who is', 'What is', 'The history of']
    const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')

    console.log(selectedPrefixIndex)
}
console.log(content)

}

start()