import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./IngredientModal.css";
import { GoChevronLeft } from "react-icons/go";
import ingredient_cover_img from "../assets/ing.png";
import mockDishes from "../Data/mockDishes";

const IngredientModal = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dish = mockDishes.find((item) => item.id === Number(id));

  if (!dish) return <p>Dish Not Found</p>;
  return (
    <div className="ingredients__main__container">
      <div className="heading__section">
        <GoChevronLeft
          className="left__arrow_symbol"
          onClick={() => navigate(-1)}
        />
        <h1>Ingredients</h1>
      </div>
      <div className="ingredients__content__responsive">
        <div className="ingredients__content__card">
          <h2>{dish.name}</h2>
          <p>{dish.description}</p>
          <h3 className="Ing__heading">Ingredients</h3>
          <p>For 2 People</p>
        </div>
        <img
          src={ingredient_cover_img}
          alt="cover_image"
          className="ing__img"
        />
      </div>
      <table className="ingredients__table">
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {dish.ingredients.map((ing, index) => (
            <tr key={index}>
              <td>{ing.name}</td>
              <td>{ing.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IngredientModal;
