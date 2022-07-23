const userAnswer = confirm(`Tell me three most important words 💚`);
let i
if (userAnswer) {

    const wordCHeck = 3;
    let finalStr = '';
  

    for (i=1; i<=wordCHeck; i++){
        
        let word,
            wordHasNumber;

        do{ word = prompt(`Print the word #${i}`);

            if (word) {
                word === word.trim();
                wordHasNumber = false;
            
             

                for( let j=0; j < word.length; j++){
                    let actualLetter = word[j];
                    console.log(actualLetter);

                    if(!isNaN(+actualLetter)){
                        wordHasNumber = true;
                        break;
                    }
                }

            }
        } while (!word || wordHasNumber);
    
        console.log(word)
        let formatter;
        do{
            formatter = prompt('Choise formate change: 1) uppercase, 2) lowercase 3)capitalize')
    
            if(formatter ){
                formatter=formatter.replaceAll(' ', '').toLowerCase();
            }
        } while (!formatter || (formatter !== 'uppercase' && formatter !== 'lowercase' && formatter !== 'capitalize'));
        console.log(formatter)

        switch(formatter){
            case 'uppercase':
                word = word.toUpperCase();
                break;
                case 'lowercase':
                word = word.toLowerCase();
                break;
                case 'capitalize':
                word = word[0].toUpperCase() + word.slice(1).toLowerCase();
                break;
        }
            console.log(word)
        finalStr += word;
        finalStr += i===wordCHeck ? '!' : ' ';
       
    }
    
        
    console.log(finalStr);

} 
