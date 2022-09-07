const SQUARE_CONTAINER = document.querySelector('.square-container');
const HEX_KEYS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]
const SQUARES = 2516;

for (let s = 0; s < SQUARES; s++) {
    const SQUARE = document.createElement('div');
    SQUARE.classList.add('square');

    SQUARE.addEventListener('mouseover', () => colorThatSquare(SQUARE))

    SQUARE.addEventListener('mouseout', () => dontColorThatSquare(SQUARE))

    SQUARE_CONTAINER.appendChild(SQUARE);
}

function colorThatSquare(square) {
    const COLOR = randomHexColor()
    square.style.background = COLOR;
    square.style.boxShadow = `0 1px 2px ${COLOR}, 0 1px 2px ${COLOR}`
    
}

function dontColorThatSquare(square) {
    square.style.background = "rgb(10, 14, 17)"
    square.style.boxShadow = "0 1px 2px rgb(20, 20, 65)"
    
}

function randomHexColor() {
        let randomHexColor = "#";
            for ( let c = 0; c < 6; c++ ) {
                randomHexColor += HEX_KEYS[getRandomHexKeys()]
            }
    
        return randomHexColor
}

function getRandomHexKeys() {
    return Math.floor(Math.random() * HEX_KEYS.length)
}

randomHexColor()