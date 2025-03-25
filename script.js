let randomNum = Math.floor(Math.random() * 100) + 1; // 랜덤 숫자 생성

const guessGame = document.querySelector('.guessGame');
const result = document.querySelector('.result');
const numStatus = document.querySelector('.numStatus');

const guessForm = document.querySelector('.guessForm');
const submitForm = document.querySelector('.submitForm');

const formInput = document.getElementById('formInput');
const inputEnter = document.getElementById('inputEnter');

let guessCnt = 1; // 몇 번 제출했는지, count
let resetBtn; // 초기화 버튼
guessForm.focus(); // 페이지 로딩이 끝나면 텍스트 커서가 자동으로 <input>에 가도록 한다.

// 플레이어의 추측 숫자가 정답인 지 아닌 지 확인하고, 그 결과에 따른 numStatus 알려주기
function checkNum() {
  let userNum = Number(guessForm.value);
  guessGame.textContent += userNum + ' ';

  if (userNum == randomNum) {
    result.textContent = '정답!';
    result.style.backgroundColor = 'green';
    numStatus.textContent = '';
    gameOver();
  } else if (guessCnt === 10) {
    result.textContent = '아쉽네요. 다시 도전하세요.';
    numStatus.textContent = '';
    gameOver();
  } else {
    result.textContent = '틀렸습니다.';
    result.style.backgroundColor = 'red';
    result.style.color = 'white';
    if (userNum < randomNum) {
      numStatus.textContent = '더 큰 숫자를 입력해 보세요.';
    } else if (userNum > randomNum) {
      numStatus.textContent = '더 작은 숫자를 입력해 보세요.';
    }
  }

  guessCnt++; // count 증가
  guessForm.value = '';
  guessForm.focus();
}

formInput.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputEnter.value === '') {
    alert('입력해 주세요');
  } else {
    checkNum();
  }
});

function gameOver() {
  // 비활성화를 하지 않으면 게임이 끝난 뒤에도 플레이어가 정답을 추가로 입력해서 게임을 망가뜨리게 된다.
  guessForm.disabled = true; // 텍스트 입력 칸, disabled 속성을 true로 설정해서 비활성화
  submitForm.disabled = true; // 제출 버튼, disabled 속성을 true로 설정해서 비활성화

  resetBtn = document.createElement('button');
  resetBtn.textContent = '다시 시작';
  resetBtn.style.cssText = `
  background-color: #000;
  border: none;
  width: 70px;
  height: 30px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  text-align: center`;

  document.body.appendChild(resetBtn);
  resetBtn.addEventListener('click', resetGame);
}

function resetGame() {
  guessCnt = 1;

  const reset = document.querySelectorAll('.reset p');
  for (const rp of reset) {
    reset.textContent = '';
  }

  resetBtn.parentNode.removeChild(resetBtn); // HTML에서 초기화 버튼 제거

  guessForm.disabled = false;
  submitForm.disabled = false;
  guessForm.value = '';
  guessForm.focus();

  randomNum = Math.floor(Math.random() * 100) + 1;
}
