import React from "react";
import React, { useState } from "react";

function CategoryFilter({ categories, setButtonCategory }) {
  const [isSelected, setIsSelected] = useState(
    categories.map((category) => ({
      [category]: false,
    }))
  );
  // console.log(isSelected);

  function handleButtonClick(e) {
    const name = e.target.name;
    const newButtons = [...isSelected];
    newButtons[name] = !newButtons[name];
    setIsSelected(newButtons);
    setButtonCategory(name);
  }

function CategoryFilter() {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map((category) => (
        <button
          className={isSelected[category] ? "selected" : ""}
          name={category}
          key={category}
          onClick={handleButtonClick}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
export default CategoryFilter;