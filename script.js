const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const password1El = document.getElementById('password-1')
const password2El = document.getElementById('password-2')

function randomCharacter(){
    return characters[Math.floor( Math.random() * characters.length)]
}

function generatePassword(){
    let password1 = ''
    let password2 = ''

    for( let i = 0; i < 10; i++ ){
        password1 += randomCharacter()
    }
    for( let i = 0; i < 10; i++ ){
        password2 += randomCharacter()
    }
    
    password1El.textContent = password1
    password2El.textContent = password2
}
