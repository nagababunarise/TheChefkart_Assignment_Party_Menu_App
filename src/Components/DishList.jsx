import React, { useState } from "react";
import "./DishList.css";
import { GoChevronLeft } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import Filters from "./Filters";
import DishCard from "../Components/DishCard";
import mockDishes from "../Data/mockDishes";

const DishList = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [foodFilter, setFoodFilter] = useState(null);

  //Track selected dishes
  const [selectedDishes, setSelectedDishes] = useState([]);

  // Toggle Add/Remove
  const toggleDish = (dishId) => {
    setSelectedDishes((prev) =>
      prev.includes(dishId)
        ? prev.filter((id) => id !== dishId)
        : [...prev, dishId]
    );
  };

  // Filter dishes
  const filteredDishes = mockDishes.filter((dish) => {
    const matchesSearch = dish.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    const matchesCategory =
      selectCategory === "" || dish.mealType === selectCategory;

    const matchesFood =
      foodFilter === null ||
      (foodFilter === "VEG" && dish.type === "VEG") ||
      (foodFilter === "NON-VEG" && dish.type === "NON-VEG");

    return matchesSearch && matchesCategory && matchesFood;
  });

  // Count items by category
  const categoryCounts = mockDishes.reduce((acc, dish) => {
    const type = dish.mealType || "Other";
    acc[type] = (acc[type] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="dishList-main-container">
      {/*------------------------------------------ Search Bar ----------------------------*/}
      <div className="dishList__search">
        <GoChevronLeft className="right-arrow" />
        <input
          type="search"
          value={searchInput}
          className="dishList__search-input"
          placeholder="Search dish for your party....."
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <CiSearch className="right-arrow" />
      </div>

      {/* ----------------------------------------Category Tabs --------------------------------------*/}
      <ul className="dishList__menu">
        <li
          onClick={() => setSelectCategory("STARTER")}
          className={selectCategory === "STARTER" ? "active" : ""}
        >
          Starter ({categoryCounts["STARTER"] || 0})
        </li>
        <li
          onClick={() => setSelectCategory("MAIN COURSE")}
          className={selectCategory === "MAIN COURSE" ? "active" : ""}
        >
          Main Course ({categoryCounts["MAIN COURSE"] || 0})
        </li>
        <li
          onClick={() => setSelectCategory("DESSERT")}
          className={selectCategory === "DESSERT" ? "active" : ""}
        >
          Dessert ({categoryCounts["DESSERT"] || 0})
        </li>
        <li
          onClick={() => setSelectCategory("SIDES")}
          className={selectCategory === "SIDES" ? "active" : ""}
        >
          Sides ({categoryCounts["SIDES"] || 0})
        </li>
      </ul>

      {/* --------------------------------Veg / Non-Veg Filter --------------------------------*/}
      <Filters
        foodFilter={foodFilter}
        setFoodFilter={setFoodFilter}
        selectCategory={selectCategory}
        selectedCount={filteredDishes.length}
      />

      {/* -----------------------------Dish Cards ------------------------------*/}
      {filteredDishes.length > 0 ? (
        filteredDishes.map((dish) => (
          <DishCard
            key={dish.id}
            dishCardDetails={dish}
            isAdded={selectedDishes.includes(dish.id)}
            onToggle={() => toggleDish(dish.id)}
          />
        ))
      ) : (
        <p className="dish__notFound__msg">No Dishes Found</p>
      )}

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          background: "#fff",
          borderTop: "1px solid #ddd",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 -2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <span>
          {selectedDishes.length} item
          {selectedDishes.length !== 1 ? "s" : ""} selected
        </span>
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            fontWeight: "600",
            cursor: "pointer",
          }}
          onClick={() =>
            alert(`Proceeding with ${selectedDishes.length} items`)
          }
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

export default DishList;
