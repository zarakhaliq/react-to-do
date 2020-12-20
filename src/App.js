import React, {useState, useEffect} from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //inputText is the value of the input which is a blank string when you load the page.
  //setInputTextValue is a function that changes the inputText value.
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect: useEFFECT runs the first time you load the page and everytime a state (useState) in the array changes
  //useEffect(() => {
  //getLocalTodos();
  //}, []);
  useEffect(() => {
    filteredTodosHandler();
    //saveLocalTodos();
  }, [todos, status]);

  //Functions

  const filteredTodosHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Personal Todo List</h1>
      </header>
      <div className="formSection">
        <Form
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList
          setTodos={setTodos}
          todos={todos}
          filteredTodos={filteredTodos}
        />
        <div></div>
      </div>
    </div>
  );
}

export default App;
