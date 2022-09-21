const userData = {
	USD: 1000,
	EUR: 900,
	UAH: 15000,
	BIF: 20000,
	AOA: 100
};

const bankData = {
    USD: {
        max: 3000,
        min: 100,
        img: '💵'
    },
    EUR: {
        max: 1000,
        min: 50,
        img: '💶'
    },
    UAH: {
        max: 0,
        min: 0,
        img: '💴'
    },
    GBP: {
        max: 10000,
        min: 100,
        img: '💷'
    }
}
let chooseCurrency
let userCurrency = Object.keys(userData)
let bankCurrency= Object.keys(bankData)

let getMoney = new Promise(
        function(resolve, reject){
            let startQuestion = confirm('Подивитися баланс карті?')
            startQuestion ? resolve() : reject();
        }
    );

getMoney
    .then(
        function(){
            do{
                chooseCurrency = prompt(`Оберіть валюту: ${userCurrency.join(`, `)}`)
                if(chooseCurrency){
                    chooseCurrency=chooseCurrency.replaceAll(' ', '').toUpperCase();
                }
            } while (!userCurrency.includes(chooseCurrency))   
            console.log (`Баланс становить: ${userData[chooseCurrency]}${chooseCurrency}`)
        },
        function(){
            let availableBankCurrency = bankCurrency.filter(currency => bankData[currency].max>0)
            let availableUserBankCurrency = availableBankCurrency
                .filter(currency => userCurrency.includes(currency))
            
            do{
                chooseCurrency = prompt(`Оберіть валюту яку бажаєте зняти готівку: ${availableUserBankCurrency.join(`, `)}`)
                if(chooseCurrency){
                    chooseCurrency = chooseCurrency.replaceAll(' ', '').toUpperCase();
                }
            } while (!availableUserBankCurrency.includes(chooseCurrency)) 
            
            let maxAvailableBank = bankData[chooseCurrency].max
            let minAvailableBank = bankData[chooseCurrency].min
            do{
                chooseAmount = +prompt(`Введіть суму. На вашому рахунку: ${userData[chooseCurrency]}. Допустима сума зняття у банкоматі: ${minAvailableBank} - ${maxAvailableBank}${chooseCurrency}.`)
               
            } while (!chooseAmount) {
                switch(true){
                    case (chooseAmount <= minAvailableBank):
                        console.log(`Введена сума менша за доступну. Мінімальна сума зняття: ${minAvailableBank}${chooseCurrency}`)
                        break;
                   
                    case (chooseAmount >= maxAvailableBank || chooseAmount >= userData[chooseCurrency]):
                        console.log(`Введена сума більша за доступну. Максимальна сума зняття:${userData[chooseCurrency]<maxAvailableBank ? userData[chooseCurrency] :  maxAvailableBank}${chooseCurrency} `)
                        break;

                    default:
                        console.log(`От Ваші гроші ${chooseAmount}${chooseCurrency} ${bankData[chooseCurrency].img}`)
                }
            }
        }
    )
    .finally(
        function(){
            console.log (`Дякую, гарного дня 😊`);
        }
        
    )
   