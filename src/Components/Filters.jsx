import React from "react";
import "./Filters.css";
import SquareToggle from "../Components/SquareToggle";

const Filters = ({
  foodFilter,
  setFoodFilter,
  selectCategory,
  selectedCount,
}) => {
  return (
    <div className="Filters__container">
      <h1>
        Select{" "}
        {selectCategory
          ? `${selectCategory} (${selectedCount})`
          : `(${selectedCount})`}
      </h1>
      <div className="switch-btn-container">
        <SquareToggle
          color="red"
          isActive={foodFilter === "NON-VEG"}
          onClick={() =>
            setFoodFilter(foodFilter === "NON-VEG" ? null : "NON-VEG")
          }
        />
        <SquareToggle
          color="green"
          isActive={foodFilter === "VEG"}
          onClick={() => setFoodFilter(foodFilter === "VEG" ? null : "VEG")}
        />
      </div>
    </div>
  );
};

export default Filters;
