import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import DishList from "./Components/DishList";
import IngredientModal from "./Components/IngredientModal";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<DishList />} />
          <Route path="/ingredients/:id" element={<IngredientModal />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
