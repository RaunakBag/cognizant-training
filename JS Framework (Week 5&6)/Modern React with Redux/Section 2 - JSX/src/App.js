import React from "react";
import "./style.css";

export default function App() {
  const labelName = () => "Submit It!";
  const vishal = "Vishal Kiwade";
  return (
    <div>
      <label for="name" className="label">
        {vishal}
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {labelName()}
      </button>
    </div>
  );
}
