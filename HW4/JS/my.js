const sentence = prompt('Write a text string, for exemple "How much is the fish?"');
let IDCode = Number(prompt('Chose some operation: 1) unicode 2) delete 3) change to smile 4)letter'));


switch (IDCode){
  case 1:
  let identityCode = Number(prompt('1) Enter the ID code'));
  console.log(sentence.charCodeAt(identityCode));
  break;
  case 2:
  let deleteSymbol = Number(prompt('2) Enter the code for delete'));
  let ddd = sentence.slice(0 , deleteSymbol); 
  let ppp = sentence.slice(deleteSymbol+1)
    
  console.log(ddd+ppp)
  break;
  case 3:
  let changeSmileIndex = Number(prompt('3) Enter the code to change to smile'));
  let smileIndex = getRandomIntInclusive(0, 9)
  arr = [":)", "=)", ":’-)", ":’-D", ":-e", ":*)", ":-X", "(´｡• ᵕ •｡)", "(´･ᴗ･ )", "o(>ω<)o"];
  console.log(sentence.replace(`${sentence[changeSmileIndex]}`, `${arr[smileIndex]}`));
  break;
  case 4:
  let withoutGap = sentence.replace(/\s/g, '');
  console. log(withoutGap.length);
}




function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max); 

  return Math.floor(Math.random() * (max - min + 1) + min);
}