//랜덤 숫자 생성
//유저 숫자 입력
//1~100 숫자만 허용
//숫자 비교(시작 버튼)
//작으면 업 크면 다운
//비교 할 때마다 찬스 -1
//찬스 0 => 게임 오버 -> 시작 버튼 디스에이블드
//리셋 버튼 누르면 게임 초기화(랜덤 숫자, 결과, 찬스, 버튼 디스에이블드)

//random -> 0~1 사이 소수 * 100 0~100사이 소수 floor -> 소수 제거 + 1 -> 1~100까지 확장
let computerNum = Math.floor(Math.random() * 100) + 1;
console.log(computerNum);

//input value 가져온다 playbtn을 누르면 시작

let userInput = document.getElementById("userInput");
let resultAre = document.getElementById("resultAre");
let playbtn = document.getElementById("playbtn");
let hintAre = document.getElementById("hintAre");
let easybtn = document.getElementById("easybtn");
let middlebtn = document.getElementById("middlebtn");
let hardbtn = document.getElementById("hardbtn");
let gameOver = false;
let chance = 5;
let chanceAre = document.getElementById("chanceAre");
let resetbtn = document.getElementById("resetbtn");
let history = [];

//뷰 결과
const showmessage = (message) => {
  resultAre.textContent = message;
};

//뷰 찬스
const showchance = (chance) => {
  chanceAre.textContent = `남은 찬스 : ${chance}번`;
};

//버튼 디스에이블
const disablePlayButton = (isDisabled) => {
  playbtn.disabled = isDisabled;
};

//유효성 검사
const isOk = (value) => {
  return value >= 1 && value <= 100;
};

//힌트 함수
const showhint = (message) => {
  hintAre.textContent = `힌트 : ${message}`;
};

const givehint = (value) => {
  const diff = Math.abs(value - computerNum);
  if (diff >= 40) return showhint("너무너무 멀어요(40이상차이)");
  if (diff >= 25) return showhint("너무 멀어요(25이상차이)");
  if (diff >= 15) return showhint("조금 멀어요(15이상차이)");
  if (diff >= 10) return showhint("꽤 가까워요(10이상차이)");
  if (diff >= 5) return showhint("많이 가까워요(5이상차이)");
  return showhint("굿!!!");
};

//메인 코드
const play = () => {
  const uservalue = parseInt(userInput.value);
  console.log(uservalue);
  //1~100까지만
  if (!isOk(uservalue)) {
    showmessage("결과 : 올바른 숫자 입력!(1~100)");
    return;
  }

  if (history.includes(uservalue)) {
    showmessage("결과 : 중복이다 이 놈아");
    return;
  }
  //찬스가 0일때 정답을 맞추면??? 게임 오버??
  const isCorrect = uservalue === computerNum;
  if (isCorrect) {
    showmessage("결과 : 정답");
    disablePlayButton(true);
    return;
  }

  chance--;
  showchance(chance);
  history.push(uservalue);

  if (chance < 1) {
    gameOver = true;
    showmessage("결과 : 게임 오버");
    showhint("흐흐흐흐흐");
    disablePlayButton(true);

    const overlay = document.getElementById("overlay");
    overlay.style.display = "block";

    // 2초 후 이미지 삽입
    setTimeout(() => {
      overlay.innerHTML = `<img src="./img/실패 화면.gif" alt="Game Over">`;
    }, 1500);

    setTimeout(() => {
      overlay.innerHTML = "";
      overlay.style.display = "none";
    }, 3000);
    return;
  }

  givehint(uservalue);
  //비교
  if (uservalue < computerNum) {
    showmessage("결과 : 업!");
  } else if (uservalue > computerNum) {
    showmessage("결과 : 다운!");
  }
};

//리셋
const reset = () => {
  disablePlayButton(false);
  computerNum = Math.floor(Math.random() * 100) + 1;
  applyDiffculty(level);
  history = [];
  gameOver = false;
  showchance(chance);
  showmessage("결과 : ");
  showhint("");
  userInput.value = "";
};

//난이도
let level = "middle";

const applyDiffculty = (level) => {
  if (level === "easy") chance = 14;
  else if (level === "hard") chance = 4;
  else chance = 9;
};

const setDifficulty = (selectedLevel) => {
  level = selectedLevel;
  applyDiffculty(level);
  showchance(chance);
};

easybtn.addEventListener("click", () => setDifficulty("easy"));
middlebtn.addEventListener("click", () => setDifficulty("middle"));
hardbtn.addEventListener("click", () => setDifficulty("hard"));

//엔터
//e는 키보드 이벤트에 대한 정보 덩어리
//e.key는 실제 키 이름
userInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    play();
  }
});

resetbtn.addEventListener("click", reset);
playbtn.addEventListener("click", play);
userInput.addEventListener("focus", () => (userInput.value = ""));

//textcontent = "" -> 함수
//userInput.value를 uservalue 공통
//찬스 결과도 함수로
//게임오버 찬스 통합
//디스에이블드 함수
//숫자 범위 유효성 검사 ->함수

//추가
//힌트
//엔터
//난이도
