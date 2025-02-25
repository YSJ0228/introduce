import React from "react";

export const MyIntro = ({ intro }) => {
  return (
    <div className="card">
      <h2>자기소개</h2>
      <p>{intro}</p>
    </div>
  );
};
