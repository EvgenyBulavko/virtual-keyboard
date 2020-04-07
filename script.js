
const RUS_KEY = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у',
    'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о',
    'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲',
    'Shift', 'Ctrl', 'Win', 'Alt', " ", 'Alt', '◄', '▼', '►', 'Ctrl'];

const RUS_KEY_SHIFT = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У',
    'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О',
    'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲',
    'Shift', 'Ctrl', 'Win', 'Alt', " ", 'Alt', '◄', '▼', '►', 'Ctrl'];

const EN_KEY = ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace',
    'Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", 'Del',
    'CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '▲', "Shift",
    "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"
];

const EN_KEY_SHIFT = ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace',
    'Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", 'Del',
    'CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', 'Enter',
    "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '▲', "Shift",
    "Ctrl", "Win", "Alt", " ", "Alt", "◄", "▼", "►", "Ctrl"
];

const KEY_CODE = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];


let Caps = false;
let Meta = false;
//add
let divWrapper = document.createElement('div')
divWrapper.classList.add('wrapper');

let textArea = document.createElement('textarea');
textArea.classList.add('textarea');
divWrapper.append(textArea)
document.body.append(divWrapper);

let divKeyboard = document.createElement('div');
divKeyboard.classList.add('keyboard');
divWrapper.append(divKeyboard);

let Lang = document.createElement('div');
Lang.classList.add('lange');
Lang.textContent = "Win переключение языков, сделано на Windows"
divWrapper.append(Lang);

localStorage.getItem('save');

let mass = RUS_KEY;

if (localStorage.getItem('save') === 'true') {
 mass = EN_KEY;
 Meta = true;
}

for (let i = 0; i < mass.length; i++) {
    let key = document.createElement('span');
    key.textContent = mass[i];
    key.setAttribute('id', KEY_CODE[i]);
    key.classList.add('key');
    key.classList.add('button');
    key.classList.add('glass');
    key.classList.add('clear-b');
    divKeyboard.append(key);
}


function RemoveKeyRus(event) {

    if (Meta === false) {
        if (Caps === true || event === "ShiftLeft" || event === "ShiftRight" || event === "MetaLeft") {
            for (let i = 0; i < RUS_KEY_SHIFT.length; i++) {

                document.querySelector("#" + KEY_CODE[i]).textContent = RUS_KEY_SHIFT[i];

            }
        }

    }
    if (Meta === true) {
        if (Caps === true || event === "ShiftLeft" || event === "ShiftRight" || event === "MetaLeft") {
            for (let i = 0; i < EN_KEY_SHIFT.length; i++) {

                document.querySelector("#" + KEY_CODE[i]).textContent = EN_KEY_SHIFT[i];

            }
        }

    }


}
function KeyRus() {
    if (Meta === false) {
        for (let i = 0; i < RUS_KEY_SHIFT.length; i++) {

            document.querySelector("#" + KEY_CODE[i]).textContent = RUS_KEY[i];

        }

    }
    if (Meta === true) {
        for (let i = 0; i < EN_KEY_SHIFT.length; i++) {

            document.querySelector("#" + KEY_CODE[i]).textContent = EN_KEY[i];

        }

    }

}

function keyUp(event) {


    document.querySelector("#" + event).classList.remove("active");

    if (event === "CapsLock") {

        if (Caps === false) {
            KeyRus();
        } else {
            document.querySelector("#" + event).classList.add("active");
        }
    } else
        if (event === "ShiftLeft" || event === "ShiftRight") {
            KeyRus();
        }




}

function keyDown(event) {


    document.querySelector("#" + event).classList.add("active");


    if (event === "CapsLock") {
        if (Caps === true) {
            Caps = false;
        } else Caps = true;
        RemoveKeyRus(event);
    } else
        if (event === "ShiftLeft" || event === "ShiftRight") {
            RemoveKeyRus(event);
        } else
            if (event === "Backspace" || event === "Delete") {
                textArea.textContent = textArea.textContent.slice(0, -1);
            }
            else
                if (event === "Tab") {
                    textArea.textContent += "   ";
                } else
                    if (event === "ControlLeft" || event === "ControlRight" || event === "AltLeft" || event === "AltRight") {

                    } else
                        if (event === "Enter") {
                            textArea.textContent += '\n';
                        } else
                            if (event === "MetaLeft") {
                                if (Meta === true) {
                                    Meta = false;
                                    localStorage.setItem('save', Meta);


                                    console.log(localStorage.getItem('save'));
                                } else {
                                    Meta = true;
                                    localStorage.setItem('save', Meta);
                          
                                }

                                if (Caps === true) {
                                    RemoveKeyRus(event);
                                } else KeyRus();

                            }

                            else {
                                textArea.textContent += document.querySelector("#" + event).textContent;
                            }


}



let x = document.querySelectorAll('.key');
let keyboard = document.querySelector('.keyboard');



keyboard.addEventListener('mousedown', function (event) {
    if (!event.target.classList.contains('key')) return;

    let key = event.target.id;

    keyDown(key);


    window.addEventListener('mouseup', function (event) {
        keyUp(key);

    }, { once: true });
});


document.addEventListener('keydown', (event) => { event.preventDefault(); keyDown(event.code) });
document.addEventListener('keyup', (event) => { event.preventDefault(); keyUp(event.code) });


