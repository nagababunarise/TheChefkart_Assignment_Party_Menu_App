import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DishCard.css";
import Ingredient_logo from "../assets/Ingredients_img.png";
import Non_Veg_logo from "../assets/record.png";
import Veg_logo from "../assets/green-dot.png";

const DishCard = ({ dishCardDetails = {}, isAdded, onToggle }) => {
  const {
    name = "",
    description = "",
    image = "",
    type = "",
  } = dishCardDetails;
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const vegMark =
    type === "VEG" ? (
      <img src={Veg_logo} alt={type} style={{ width: "10px" }} />
    ) : (
      <img src={Non_Veg_logo} alt={type} style={{ width: "10px" }} />
    );

  return (
    <div className="dish__card">
      <div className="dish__content__card">
        <h1>
          {name || "Dish Name"} <span>{vegMark}</span>
        </h1>
        <p>
          {description
            ? expanded
              ? description
              : description.slice(0, 50) + "..... "
            : "No description available"}
          {description && (
            <span
              onClick={() => setExpanded(!expanded)}
              style={{
                color: "#000",
                cursor: "pointer",
                fontSize: "12px",
                fontWeight: "600",
                marginLeft: "5px",
              }}
            >
              {expanded ? "Read Less" : "Read More"}
            </span>
          )}
        </p>
        <div className="Ingredient__Btn__Section">
          <img src={Ingredient_logo} alt="Ingredient" />
          <button
            onClick={() => navigate(`/ingredients/${dishCardDetails.id}`)}
          >
            Ingredients
          </button>
        </div>
      </div>

      <div className="dish__image__card">
        {image ? (
          <img src={image} alt={name} />
        ) : (
          <div className="placeholder-img">No Image</div>
        )}

        {/*  Fixed Add/Remove Button */}
        <button
          onClick={onToggle}
          style={{
            backgroundColor: isAdded ? "#ff941a" : "#fff",
            color: isAdded ? "white" : "#16C47F",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontWeight: "600",
            marginTop: "10px",
            position: "absolute",
            left: "50%",
            bottom: "-15px",
            transform: "translateX(-50%)",
          }}
        >
          {isAdded ? "Remove" : "Add+"}
        </button>
      </div>
    </div>
  );
};

export default DishCard;
