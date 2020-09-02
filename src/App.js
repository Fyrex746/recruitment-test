import React, {useState} from "react";
import "./styles.css";

const tasksDefault = [
  {
    id: "step1",
    text: "Learn development",
    isDone: false
  },
  {
    id: "step2",
    text: "Create stuff",
    isDone: false
  },
  {
    id: "step3",
    text: "????",
    isDone: false
  },
  {
    id: "step4",
    text: "PROFIT!!!",
    isDone: false
  },
];

export default function App() {
  const [tasks, setTasks] = useState(tasksDefault);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map(task => <TodoItem key={task.id} task={task} onSetDone={isDone => handleSetDone(task.id, isDone)} />)}
      </ul>
    </div>
  );

  function handleSetDone(id, isDone) {
    const nextTasks = tasks.map(task => {
      if (task.id === id) {
        return {
          ...task,
          isDone
        }
      } else {
        return task;
      }
    });
    setTasks(nextTasks);
  }
}

function TodoItem({task, onSetDone}) {
  const {id, text, isDone} = task;
  return <li key={id}>
    <span className="deleteIcon">x</span>
    <input
      type="checkbox"
      id={id}
      name={id}
      checked={isDone}
      onClick={e => onSetDone(e.target.checked)}
    />
    <label for={id} className={isDone ? 'done' : ''}>{text}</label>
  </li>
}
