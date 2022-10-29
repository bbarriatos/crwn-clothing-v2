import React from "react";
import DirectoryItem from "../directory-item/DirectoryItem";

import "./directory-style.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <DirectoryItem category={category} key={category.id}></DirectoryItem>
        );
      })}
    </div>
  );
};

export default Directory;
