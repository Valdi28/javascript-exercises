const palindromes = function (string) {
    const characters = "abcdefghijklmnopqrstuvwxyz1234567890"
    const lowercase =  string.toLowerCase()

    const formatedString = lowercase.split("").filter(char => characters.split("").includes(char)).join("");


    const reservedString = formatedString.split("").reverse().map(char => char).join("")
    return (formatedString == reservedString)
};

console.log(palindromes('A car, a man, a maraca.'));


// Do not edit below this line
module.exports = palindromes;
