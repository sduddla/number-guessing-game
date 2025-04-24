let randNum = Math.floor(Math.random() * 100) + 1;

const inputForm = document.querySelector('.inputForm');
const guessInput = document.querySelector('.guessInput');
const guessBtn = document.querySelector('.guessBtn');

const guessContent = document.querySelector('.guessContent');
const guessResult = document.querySelector('.guessResult');
const numStatus = document.querySelector('.numStatus');

let guessCnt = 1;
let resetBtn;
guessInput.focus();

function checkNum() {
  let userNum = Number(guessInput.value);
  guessContent.textContent += userNum + ' ';

  if (userNum === randNum) {
    guessResult.textContent = 'Correct!';
    guessResult.style.backgroundColor = 'green';
    numStatus.textContent = '';
    gameOver();
  } else if (guessCnt === 10) {
    guessResult.textContent = 'Out of guesses! The game is over.';
    guessResult.style.backgroundColor = 'red';
    guessResult.style.color = 'white';
    numStatus.textContent = '';
    gameOver();
  } else {
    guessResult.textContent = 'Try again!';
    guessResult.style.backgroundColor = 'red';
    guessResult.style.color = 'white';

    if (userNum < randNum) {
      numStatus.textContent = 'Try a bigger number.';
    } else if (userNum > randNum) {
      numStatus.textContent = 'Try a smaller number.';
    }
  }

  guessCnt++;
  guessInput.value = '';
  guessInput.focus();
}

inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (guessInput.value.trim() === '') {
    alert('Please enter a number.');
  } else {
    checkNum();
  }
});

function gameOver() {
  guessInput.disabled = true;
  inputForm.disabled = true;

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.classList.add('resetBtn');
  resetBtn.textContent = 'reset';
  resetBtn.style.display = 'block';

  resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
  guessCnt = 1;

  const reset = document.querySelectorAll('.reset div');
  for (const rb of reset) {
    rb.textContent = '';
  }

  const resetBtn = document.getElementById('resetBtn');
  resetBtn.style.display = 'none';

  guessInput.disabled = false;
  inputForm.disabled = false;
  guessInput.value = '';
  guessInput.focus();

  randNum = Math.floor(Math.random() * 100) + 1;
}
