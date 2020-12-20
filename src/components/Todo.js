import React from "react";

const Todo = ({text, todos, setTodos, todo, filteredTodos}) => {
  // console.log(todos);
  const deleteHandler = () => {
    console.log(todo);
    ///Filter method returns an array of todos who's id do not match the id of the element user clicks on to delete.This will in essence give the
    //todos list WITHOUT the todo the user clicked i.e. it deltes the element clicked.
    setTodos(todos.filter(el => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map(el => {
        if (el.id === todo.id) {
          console.log(todo);
          return {...el, completed: !el.completed};
          console.log(todo);
        }
        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="completeBtn" onClick={completeHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trashBtn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
