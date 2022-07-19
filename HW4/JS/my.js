const sentence = prompt('Write a text string, for exemple "How much is the fish?"');
let IDCode = Number(prompt(`Chose some operation: 
1) Узнать unicode значение символа (по индексу). 
2) Удалить символ из строки (по индексу).
3) Заменит символ из строки (по индексу) на случайный смайлик.
4) Узнать количество букв в строке (без пробелов).`));


switch (IDCode){
  case 1:
  let identityCode = Number(prompt('1) Enter the Index'));
  console.log(sentence.charCodeAt(identityCode));
  break;
  case 2:
  let deleteSymbol = Number(prompt('2) Enter the code for delete'));
  let pieseStart = sentence.slice(0 , deleteSymbol); 
  let pieseEnd = sentence.slice(deleteSymbol+1)
    
  console.log(pieseStart+pieseEnd)
  break;
  case 3:
  let changeSmileIndex = Number(prompt('3) Enter the code to change to smile'));
  let smileIndex = getRandomIntInclusive(0, 9)
  arr = [":)", "=)", ":’-)", ":’-D", ":-e", ":*)", ":-X", "(´｡• ᵕ •｡)", "(´･ᴗ･ )", "o(>ω<)o"];
  let partStart = sentence.slice(0 , changeSmileIndex);
  let partEnd = sentence.slice(changeSmileIndex+1)
  console.log(partStart+`${arr[smileIndex]}`+partEnd)
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