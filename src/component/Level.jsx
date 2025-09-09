import React, { useState } from "react";

const Level = ({ setChance, setSelected, selected }) => {
  const changeChance = (num, level) => {
    setChance(num);
    setSelected(level);
  };
  return (
    <div className="p-[0.3px] level-btn-box">
      <button
        style={{ fontFamily: "NangyangSpecial", color:"#FF0000", backgroundColor:"#222222"}}
        className="m-[0.5vw]"
        onClick={() => changeChance(3, "easy")}
        disabled={selected !== null && selected !== "easy"}
      >
        쉬움
      </button>
      <button
        style={{ fontFamily: "NangyangSpecial", color:"#B00000", backgroundColor:"#222222"}}
        className="m-[0.3vw]"
        onClick={() => changeChance(5, "normal")}
        disabled={selected !== null && selected !== "normal"}
      >
        보통
      </button>
      <button
        style={{ fontFamily: "NangyangSpecial", color:"#8B0000", backgroundColor:"#222222"}}
        className="m-[0.3vw]"
        onClick={() => changeChance(7, "hard")}
        disabled={selected !== null && selected !== "hard"}
      >
        어려움
      </button>
    </div>
  );
};

export default Level;
