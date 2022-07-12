let sentence = prompt('Write a text string, for exemple "How much is the fish?"')
let identityCode = Number(prompt('1) Enter the ID code'))

console.log(sentence.charCodeAt(identityCode));

let deleteSymbol = Number(prompt('2) Enter the code for delete'));

console.log(sentence.replace(`${sentence[deleteSymbol]}`,``));

let changeSmileIndex = Number(prompt('3) Enter the code to change to smile'));

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max); 
  
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  let smileIndex = getRandomIntInclusive(0, 9)
arr = [":)", "=)", ":’-)", ":’-D", ":-e", ":*)", ":-X", "(´｡• ᵕ •｡)", "(´･ᴗ･ )", "o(>ω<)o"];

console.log(sentence.replace(`${sentence[changeSmileIndex]}`, `${arr[smileIndex]}`));

let withoutGap = sentence.replace(/\s/g, '');

console. log(withoutGap.length);