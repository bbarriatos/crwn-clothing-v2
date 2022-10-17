import React from "react";
import CategoryItem from "../category-item/categoryItem";

const directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <CategoryItem category={category} key={category.id}></CategoryItem>
        );
      })}
    </div>
  );
};

export default directory;
