const userAnswer = confirm(`Tell me three most important words 💚`);
let i

if (userAnswer) {

    const wordCheck = 3;
    let finalStr = '';
  
    for (i=1; i<=wordCheck; i++){
        
        let word,
            wordHasNumber;

        do{ word = prompt(`Print the word #${i}`);

            if (word) {
                word === word.trim();
                wordHasNumber = false;             

                for( let j=0; j < word.length; j++){
                    let actualLetter = word[j];                    

                    if(!isNaN(+actualLetter)){
                        wordHasNumber = true;
                        break;
                    }
                }

            }
        } while (!word || wordHasNumber);
            
        let formatter;
        do{
            formatter = prompt('Choise formate change: 1) uppercase, 2) lowercase 3)capitalize')
    
            if(formatter ){
                formatter=formatter.replaceAll(' ', '').toLowerCase();
            }
        } while (!formatter || (formatter !== 'uppercase' && formatter !== 'lowercase' && formatter !== 'capitalize'));
        
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
    
        finalStr += word;
        finalStr += i===wordCheck ? '!' : ' ';
       
    }    
    console.log(finalStr);

} 
