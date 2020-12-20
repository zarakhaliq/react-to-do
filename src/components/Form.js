import React from "react";

const Form = ({inputText, setInputText, todos, setTodos, setStatus}) => {
  const inputTextHandler = e => {
    //we are going to set the input text to our e.target.value which is the input text:
    setInputText(e.target.value);
  };
  const todosHandler = e => {
    e.preventDefault();
    //We can setTodos using 'spread' so that any new todo is added and the previous ones are left.
    console.log(inputText);
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputText("");
  };

  const statusHandler = e => {
    //console.log(e.target.value);
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        class="todo-input"
        onChange={inputTextHandler}
      />
      <button class="todo-button" type="submit" onClick={todosHandler}>
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo" onChange={statusHandler}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
