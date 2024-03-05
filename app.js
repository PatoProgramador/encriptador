// variables
let encriptedMessage = document.querySelector('.encripted-message-text-area');
let nonMessageDiv = document.getElementById('non-message-div');
let encriptedDiv = document.getElementById('encripted-message-div');
let easterEggDiv = document.getElementById('easter-egg-div');
let errorDiv = document.getElementById('error-div');
let errorMessage = document.getElementById('error-message');
// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas

// No deben ser utilizados letras con acentos ni caracteres especiales

// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// funcion para encriptar texto

// llaves de encriptación
const encripKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
}

// funcion para obtener el texto del textarea
function textAreaInput() {
    let text = document.getElementById('textinput').value;
    return text;
}
// se remueve el hide del ultimo siempre
function setEncriptedSection(div1, div2, div3, div4) {
    div1.classList.add('hide');
    div2.classList.add('hide');
    div3.classList.add('hide');
    div4.classList.remove('hide');
}

// funcion en loop para encriptar strings
function encryptTextLoop(text, object, keys) {
    let newText = '';

    for (let i = 0; i < text.length; i++) {
        // en caso de no incluir una de las llaves se añade el string normal
        if (keys.includes(text[i])) {
            // for anidado para explorar las llaves
            for (let j = 0; j < keys.length; j++) {

                if (text[i] == keys[j]) {
                    const letter = keys[j];
                    newText += object[letter];
                }
            }
        } else {
            newText += text[i];
        }
    }

    return newText;
}
// funcion en loop para desencriptar strings
function desencryptTextLoop(text, obj, keys) {
    let desencriptedText = '';

    for (let i = 0; i < text.length; i++) {
        // en caso de que se encuentre una vocal salta el numero de letras que tenga la llave 
        if (keys.includes(text[i])) {
            const letter = text[i];
            desencriptedText += letter;
            i += obj[letter].length - 1;
        } else {
            desencriptedText += text[i]
        }
    }

    return desencriptedText;
}

// Funciones onClick de los botones
function encryptButton() {
    const textarea = textAreaInput().toLowerCase();
    // Array de vocales para comparaciones
    const keys = Object.keys(encripKeys);

    // Modales
    if (textarea == '18 de diciembre de 2021') {
        setEncriptedSection(nonMessageDiv, errorDiv, encriptedDiv, easterEggDiv);
    } else {
        // modal en caso de que se use el botón sin texto
        if (textarea.length > 0) {
            encriptedMessage.value = encryptTextLoop(textarea, encripKeys, keys);
            setEncriptedSection(nonMessageDiv, easterEggDiv, errorDiv, encriptedDiv);
        } else {
            errorMessage.innerHTML = 'No se puede encriptar un mensaje vacío';
            setEncriptedSection(nonMessageDiv, easterEggDiv, encriptedDiv, errorDiv);
        }
    }
}


function desencryptButton() {
    const textarea = textAreaInput().toLowerCase();

    const keys = Object.keys(encripKeys);

    // Modales
    if (textarea == '18 de diciembre de 2021') {
        setEncriptedSection(nonMessageDiv, errorDiv, encriptedDiv, easterEggDiv);
    } else {
        // modal en caso de que se use el botón sin texto
        if (textarea.length > 0) {
            encriptedMessage.value = desencryptTextLoop(textarea, encripKeys, keys);
            setEncriptedSection(nonMessageDiv, easterEggDiv, errorDiv, encriptedDiv);
        } else {
            errorMessage.innerHTML = 'No se puede encriptar un mensaje vacío';
            setEncriptedSection(nonMessageDiv, easterEggDiv, encriptedDiv, errorDiv);
        }
    }
}