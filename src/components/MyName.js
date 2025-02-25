import React from "react";

export const MyName = ({ name }) => {
  return (
    <div className="card">
      <h2>내 이름</h2>
      <p>
        <p>{name}</p>
      </p>
    </div>
  );
};
