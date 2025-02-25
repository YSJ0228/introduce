import React from "react";

export const MyMbti = ({ mbti }) => {
  return (
    <div className="card">
      <h2>내 MBTI</h2>
      <p>저는 {mbti} 입니다!</p>
    </div>
  );
};
