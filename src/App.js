import React from "react";
import { MyIntro } from "./components/MyIntro";
import { MyMbti } from "./components/MyMbti";
import { MyName } from "./components/MyName";
import { LikeImg } from "./components/LikeImg";
import "./style.css";

const App = () => {
  return (
    <div className="container">
      <MyIntro intro="저는 운동과 게임을 좋아합니다!" />
      <MyMbti mbti="INFJ/P" />
      <MyName name="윤세준" />
      <LikeImg imgAlt="좋아하는 이미지" />
    </div>
  );
};

export default App;
