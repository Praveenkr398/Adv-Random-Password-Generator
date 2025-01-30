let lengthSlider = document.getElementById('lengthSlider')
let sliderValue = document.getElementById('sliderValue')

// // sliderValue.textContent = lengthSlider.value
lengthSlider.addEventListener('input', ()=>{
    sliderValue.innerText = lengthSlider.value
})

// ckeckbox js
let checkboxes = document.querySelectorAll('.checkbox')

Array.from(checkboxes).forEach((item)=>{
  
    item.addEventListener('click', (e)=>{
        console.log(e.target.innerText)
        if(e.target.innerText == 'radio_button_unchecked'){
            e.target.innerText = 'task_alt'
            e.target.nextElementSibling.nextElementSibling.checked = true
        }
        else{
            e.target.innerText = 'radio_button_unchecked'
            e.target.nextElementSibling.nextElementSibling.checked = false
        }
    })
})

let includeLabel = document.querySelectorAll('.row label')
Array.from(includeLabel).forEach(item =>{
    item.addEventListener('click',(e)=>{
       
        if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
            e.target.previousElementSibling.innerText = 'task_alt'
        }
        else{
            e.target.previousElementSibling.innerText = 'radio_button_unchecked'

        }
    })
})


// // Generate password
let generateBtn = document.getElementById('generateBtn')
let password = document.getElementById('password')
generateBtn.addEventListener('click', passWord )

function passWord (){
    let length = lengthSlider.value
    let uppercase = document.getElementById('uppercase').checked
    let lowercase = document.getElementById('lowercase').checked
    let numbers = document.getElementById('numbers').checked
    let symbols = document.getElementById('symbols').checked

    var password_generated = generatePassword(length, uppercase, lowercase, numbers, symbols)
    password.value = password_generated
    console.log(password_generated)
    
}

let ResetBtn = document.getElementById('reset')
ResetBtn.addEventListener('click', ()=>{
    password.value = '' 
})

function generatePassword (length, uppercase, lowercase, numbers, symbols){
    let charset = ""
    let string = ""
    
    if(uppercase) charset += 'ASDFGHJKLZXCVBNMQWERTYUIOP'
    if(lowercase) charset += 'asdfghjklzxcvbnmqwertyuiop'
    if(numbers) charset += '0123456789'
    if(symbols) charset += '!@#$%&*/'
    
    for(let i=0; i<length; i++){
        string += charset.charAt(Math.floor(Math.random()*charset.length))
    }
  return string
    
}


// // copy 
let copyIcon = document.getElementById('copyIcon')
copyIcon.addEventListener('click', ()=>{
    if(password.value != ""){
        navigator.clipboard.writeText(password.value)
    // console.log(password.value)
    copyIcon.innerText = 'task'
    setTimeout(() => {
        copyIcon.innerText = 'copy_all'
    }, 3000);
    }
})