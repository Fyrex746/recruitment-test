import React from "react";
import "./styles.css";

const tasks = [
  {
    id: "step1",
    text: "Learn development",
  },
  {
    id: "step2",
    text: "Create stuff",
  },
  {
    id: "step3",
    text: "????",
  },
  {
    id: "step4",
    text: "PROFIT!!!",
  },
];

export default function App() {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map(task => <TodoItem task={task} />)}
      </ul>
    </div>
  );
}

function TodoItem({task}) {
  const {id, text} = task;
  return <li key={id}>
    <span className="deleteIcon">x</span>
    <input type="checkbox" id={id} name={id} />
    <label for={id}>{text}</label>
  </li>
}
