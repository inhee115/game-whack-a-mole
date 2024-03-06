const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = 60;

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole');
    })

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}

square.forEach(id => {
    id.addEventListener('click', () => {
        if (id.id === hitPosition) {
            result += 1;
            score.textContent = result;
        }
    })
})

function moveMole() {1
    let timeId = null;
    timeId = setInterval(randomSquare, 1000);
}

function reset() {
    result = 0;
    currentTime = 60;

    score.textContent = result;
    timeLeft.textContent = currentTime;
    timeId = setInterval(countDown, 1000);
}

let timeId = setInterval(countDown, 1000);
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timeId);
        alert("GAME OVER! Your final score is " + result);
        reset();
    }
}

moveMole();



