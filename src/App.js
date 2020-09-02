import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        <li key="step1">
          <span className="deleteIcon">x</span>
          <input type="checkbox" id="step1" name="step1" />
          <label for="step1">Learn development</label>
        </li>
        <li key="step2">
          <span className="deleteIcon">x</span>
          <input type="checkbox" id="step2" name="step2" />
          <label for="step2">Create stuff</label>
        </li>
        <li key="step3">
          <span className="deleteIcon">x</span>
          <input type="checkbox" id="step3" name="step3" />
          <label for="step3">????</label>
        </li>
        <li key="step4">
          <span className="deleteIcon">x</span>
          <input type="checkbox" id="step4" name="step4" />
          <label for="step4">PROFIT!!!</label>
        </li>
      </ul>
    </div>
  );
}
