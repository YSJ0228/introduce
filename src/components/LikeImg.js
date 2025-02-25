import React from "react";
import dog from "../dog.jpg";

export const LikeImg = ({ imgAlt }) => {
  return (
    <div className="card">
      <h2>내가 좋아하는 사진</h2>
      <img src={dog} alt={imgAlt} className="like-img" />
    </div>
  );
};
