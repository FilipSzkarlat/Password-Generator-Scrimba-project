const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const password1El = document.getElementById('password-1')
const password2El = document.getElementById('password-2')
const passwordsLengthErrorEl = document.querySelector('.passwords-length-error')
const includeNumbersEl = document.getElementById('include-numbers')
const includeSymbolsEl = document.getElementById('include-symbols')
let copyPasswordReady = false
let customArray = [...characters]

//Choose random character from the array
function randomCharacter(){
    return customArray[Math.floor( Math.random() * customArray.length)]
}

//Generate two different passwords display them on the screen
function generate2Passwords(){
    //ajdust array by cheking chosen checkboxes
    prepareArray()

    //When the password will be created the posibility to copy the password will be unblocked
    if(!copyPasswordReady){
        copyPasswordReady = true
        password1El.classList.add('pointer')
        password2El.classList.add('pointer')
    }
    
    //Create and display the passwords on the screen
    password1El.textContent = generatePassword()
    password2El.textContent = generatePassword()
}

//let user to copy passwords by clicking on it
function copyPassword(element) {
    if(copyPasswordReady) {
        navigator.clipboard.writeText(document.getElementById(element).textContent)
    }
}

function generatePassword() {
    //use the lenght number provided from the user or 15 by default
    const passwordLength = document.getElementById('password-length').value

    //Generate only passwords between 6 and 20 characters
    if(passwordLength > 5 && passwordLength < 21){
        //hide error message
        passwordsLengthErrorEl.classList.add('hidden')
        //Create a password
        let password = ''
            for( let i = 0; i < passwordLength; i++ ){
            password += randomCharacter()
        }

        return password
    } else {
        //show error message
        passwordsLengthErrorEl.classList.remove('hidden')
    }


}

//creating bigger or smaller array depends on the checked checkboxes
function prepareArray() {
    if(includeNumbersEl.checked){
        //add numbers to array
        customArray.push(...numbers)
    } else {
        //remove numbers from array
        customArray = customArray.filter(char => !numbers.includes(char))
    }

    if(includeSymbolsEl.checked){
        //add symbols to array
        customArray.push(...symbols)
    } else{
        //remove symbols from array
        customArray = customArray.filter(char => !symbols.includes(char))
    }

}
