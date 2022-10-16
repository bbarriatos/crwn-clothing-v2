import React from "react";
import CategoryItem from "../category-item/categoryItem";

const directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItem category={category} key={category.id}></CategoryItem>
        );
      })}
    </div>
  );
};

export default directory;
