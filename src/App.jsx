import { useState } from "react";
import "./App.css";
import Hint from "./component/Hint";
import Result from "./component/Result";
import Chance from "./component/Chance";
import Start from "./component/Start";
import Level from "./component/Level";

function App() {
  const [showmessage, setShowmessge] = useState("결과 : ");
  const [showhintmessage, setShowhintmessage] = useState("힌트 : ");
  const [chance, setChance] = useState(7);
  const [selected, setSelected] = useState(null);
  const [gameOverScreen, setGameOverScreen] = useState("idle");
  const [gameActive, setGameActive] = useState(true)

  return (
    <div>
      {gameOverScreen === "black" && (
        <div className="fixed bg-[black] w-[100vw] h-[100vh] t-[0] l-[0]"></div>
      )}
      {gameOverScreen === "image" && (
        <div>
          <div className="gameOver-img"></div>
          <img
            className="fixed  w-[100vw] h-[100vh] t-[0] l-[0"
            src="/실패 화면.gif"
            alt="게임 오버"
          />
        </div>
      )}

      {gameOverScreen === "idle" && (
        <div className="app-bg">
          <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl min-h-[400px] border-[3px] border-[#B00000] p-[2vw] text-center bg-[rgba(34,34,34,0.8)]">
            <h1 className="nosifer">up & down</h1>
            <h1 className="korean">Guess Number</h1>
            <img
              src="/기본 화면.gif"
              alt="#"
              className="m-[2vh] rounded-[25px]"
            />
            <Result showmessage={showmessage} />
            <Hint showhintmessage={showhintmessage} />
            <Chance chance={chance} />
            <Start
              setShowmessge={setShowmessge}
              setShowhintmessage={setShowhintmessage}
              setChance={setChance}
              selected={selected}
              setSelected={setSelected}
              setGameOverScreen={setGameOverScreen}
              gameActive={gameActive}
              setGameActive={setGameActive}
            />
            <Level
              setChance={setChance}
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

//guessNum-react-vite-tailwind