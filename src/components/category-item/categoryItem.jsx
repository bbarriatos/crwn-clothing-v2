import React from "react";
import "./categoryItem-styles.scss";

const categoryItem = ({ category: { title, id, imageUrl } }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}></div>
      {/* <img src="" alt="" /> */}
      <div className="category-body-container">
        <h2>{title}</h2>

        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default categoryItem;
