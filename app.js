const buttonEncript = document.getElementById('encrButton')

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

// llaves para desencriptar
const desencripKeys = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'o': 'ober',
    'ufat': 'u'
}

// funcion para obtener el texto del textarea
function textAreaInput() {
    let text = document.getElementById('textinput').value;
    return text;
}

// funcion en loop para transformar strings
function textTransformLoop(text, object, keys) {

    let newText = '';

    for (let i = 0; i < text.length; i++) {
        // en caso de no incluir una de las llaves se añade el string normal
        if (keys.includes(text[i])) {
            // for anidado para explorar las llaves
            for (let j = 0; j < keys.length; j++) {

                if (text[i] == keys[j]) {

                    const letter = keys[j];
                    newText = newText + object[letter];
                }
            }
        } else {
            newText = newText + text[i];
        }
    }

    return newText;
}


function encryptButton() {
    const textarea = textAreaInput().toLowerCase();

    const keys = Object.keys(encripKeys);

    const textEncripted = textTransformLoop(textarea, encripKeys, keys);

    // modal en caso de que se use el botón sin texto
    if (textarea.length > 0) {
        alert(textEncripted);
    } else {
        alert('No podemos encriptar un mensaje vacio ;)')
    }
}

// funcion para desencriptar texto
function desencryptButton() {

}