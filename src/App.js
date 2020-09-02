import React, {useState, useEffect} from "react";
import "./styles.css";
import {useSelector, useDispatch} from 'react-redux'


export default function App() {
  const tasks = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  return (
    <div>
      <h1>Todo List</h1>
      <AddTask addTask={handleAddTask} />
      <ul>
        {(tasks).map(task => <TodoItem
          key={task.id}
          task={task}
          onSetDone={isDone => handleSetDone(task.id, isDone)}
          onDelete={() => handleDelete(task.id)}
        />)}
      </ul>
    </div>
  );

  function handleSetDone(id, isDone) {
    dispatch({
      type: isDone ? "FINISH" : "UNFINISH",
      id
    })
  }

  function handleDelete(id) {
    dispatch({
      type: "DELETE",
      id
    })
  }

  function handleAddTask(task) {
    dispatch({
      type: "ADD",
      task
    })
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