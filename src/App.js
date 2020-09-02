import React, {useState, useEffect} from "react";
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
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || tasksDefault);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask addTask={handleAddTask} />
      <ul>
        {tasks.map(task => <TodoItem
          key={task.id}
          task={task}
          onSetDone={isDone => handleSetDone(task.id, isDone)}
          onDelete={() => handleDelete(task.id)}
        />)}
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

  function handleDelete(id) {
    const nextTasks = tasks.filter(task => task.id !== id);
    setTasks(nextTasks);
  }

  function handleAddTask(task) {
    const nextTasks = [...tasks, task];
    setTasks(nextTasks);
  }
}

function TodoItem({task, onSetDone, onDelete}) {
  const {id, text, isDone} = task;
  return <li key={id}>
    <span className="deleteIcon" onClick={() => onDelete()}>x</span>
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

function AddTask({addTask}) {
  const [text, setText] = useState('');
  return <div className="AddTask">
    <input value={text} onChange={event => setText(event.target.value)}></input>
    <button onClick={handleClick}>Add</button>
  </div>

  function handleClick() {
    const task = {
      id: String(Date.now()),
      text,
      isDone: false
    };
    setText('');
    addTask(task);
  }
}