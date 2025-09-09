import React, { useState } from "react";

const Start = ({
  setShowmessge,
  setShowhintmessage,
  setChance,
  setSelected,
  setGameOverScreen,
  gameActive,
  setGameActive,
}) => {
  const [userNum, setUserNum] = useState("");
  //컴퓨터 입력
  const [computerNum, setComputerNum] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [userHistory, setUserHistory] = useState([]);
  console.log(computerNum);
  //유저 입력
  const inputNum = (e) => {
    setUserNum(e.target.value);
  };

  console.log(userNum);

  const givehint = (value) => {
    const diff = Math.abs(value - computerNum);
    if (diff >= 40) return setShowhintmessage("그건 너무 멀어...(40이상 차이)");
    if (diff >= 25) return setShowhintmessage("아직 멀리 있어...(25이상 차이)");
    if (diff >= 15) return setShowhintmessage("기척이 느껴져...(15이상 차이)");
    if (diff >= 10) return setShowhintmessage("발소리가 들려...(10이상 차이)");
    if (diff >= 5) return setShowhintmessage("숨소리가 들려...(5이상 차이)");
    return setShowhintmessage("바로 뒤에 있어! 어서 숫자를 말해 (4이하 차이)");
  };

  //게임 시작
  const gameStart = () => {
    const guess = Number(userNum);
    if (guess < 1 || guess > 100) {
      setShowmessge("결과 : 올바른 숫자를 입력하세요(1~100)");
      setUserNum("");
      return;
    }

    if (userHistory.includes(guess)) {
      setShowmessge("결과 : 중복 입력");
      return;
    }

    setUserHistory((prev) => [...prev, guess]);

    const isCorrect = guess === computerNum;
    if (isCorrect) {
      setShowmessge("결과 : 흐흐흐흐... 정답이다...");
      setGameActive(false);
      return;
    }

    // ⚡ 함수형 업데이트(Function updater)
    // 상태를 업데이트할 때 `setChance(chance - 1)` 처럼 직접 값을 계산하면,
    // 현재 화면에 렌더링된 상태값(`chance`)을 기준으로 계산하게 된다.
    // 하지만 React의 상태 업데이트는 비동기적으로 처리되기 때문에,
    // 아직 최신 값이 반영되지 않은 상태에서 계산될 수 있고,
    // 그 결과 예상과 다른 값이 나올 수 있다.

    // ✅ 함수형 업데이트 예시: setChance(prev => prev - 1)
    // 이렇게 함수를 전달하면 React가 '항상 최신 상태값(prev)'을 보장해 준다.
    // 따라서 여러 번 연속 호출해도 꼬이지 않고 안정적으로 상태를 업데이트할 수 있다.
    setChance((currnet) => {
      const next = currnet - 1;
      if (next < 1) {
        //gameOver = true;
        setShowmessge("결과 : 게임 오버");
        setGameActive(false);
        setTimeout(() => {
          setGameOverScreen("black");
        }, 500);
        setTimeout(() => {
          setGameOverScreen("image");
        }, 1500);
        setTimeout(() => {
          setGameOverScreen("idle");
        }, 2500);
        return 0;
      }
      //setGameOverScreen

      givehint(guess);
      if (guess < computerNum) {
        setShowmessge("결과 : 업!");
      } else if (guess > computerNum) {
        setShowmessge("결과 : 다운!");
      }
      console.log("useNum", guess);
      setUserNum("");
      return next;
    });
  };

  //게임 리셋
  const gameReset = () => {
    setComputerNum(Math.floor(Math.random() * 100) + 1);
    setChance(7);
    setUserNum("");
    setSelected(null);
    setGameActive(true);
    setUserHistory([]);
    setShowmessge("결과 : ");
    setShowhintmessage("힌트 : ");
  };

  return (
    <div>
      <div className="flex justify-center mb-[1vh] items-center">
        <input
          className="input-area flex justify-center items-center"
          style={{ fontFamily: "NangyangSpecial", color: "#B00000" }}
          type="number"
          value={userNum}
          onChange={inputNum}
          placeholder=" 숫자를 입력하세요"
          onFocus={()=>setUserNum("")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              gameStart();
            }
          }}
        />
        <div className="ms-[0.5vw] flex items-center">
          <button
            style={{
              fontFamily: "NangyangSpecial",
              backgroundColor: "#B00000",
              color: "#222222",
            }}
            className="start-btn"
            onClick={gameStart}
            disabled={!gameActive}
          >
            시작
          </button>
          <button
            className="reset-btn"
            onClick={gameReset}
            style={{
              fontFamily: "NangyangSpecial",
              backgroundColor: "#222222",
              color: "#B00000",
            }}
          >
            리셋
          </button>
        </div>
      </div>
    </div>
  );
};

export default Start;
