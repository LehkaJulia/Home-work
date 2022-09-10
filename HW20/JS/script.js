const chooseColor = document.querySelector('#inputChooseColor')
const element = document.querySelector('#element')
const chooseElement = document.querySelector('#selectChooseElement')
const renderForm = document.querySelector('#choseForm')

renderForm.addEventListener('submit', event =>{

    event.preventDefault();
   
    element.style.background = chooseColor.value
    element.classList = chooseElement.value  
})
