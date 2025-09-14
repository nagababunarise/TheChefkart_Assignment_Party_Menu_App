import React, { useState } from "react";
import "./SquareToggle.css";

const SquareToggle = ({ color }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="square-btn-background">
      <div
        className={`square-toggle ${active ? "active" : ""}`}
        style={{ borderColor: color }}
        onClick={() => setActive(!active)}
      >
        <div
          className="square-circle"
          style={{
            background: active ? color : "transparent",
            borderColor: color,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SquareToggle;
