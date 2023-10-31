import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState({
    id: "",
    name: "",
  });

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setTodo({
      id: Date.now(),
      name: e.target.value,
    });
  };

  const handleCreate = () => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="input">
        <input type="text" name="add" id="" onChange={handleChange} />
        <button onClick={handleCreate}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo.name}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
