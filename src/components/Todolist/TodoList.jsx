import React, { useContext, useEffect } from "react";
import { todoContext } from "../../context/TodoContext";

const TodoList = () => {
  const { todos, getTodosData, changeStatus } = useContext(todoContext);
  useEffect(() => {
    console.log("useeffect");
    getTodosData();
  }, []);

  return (
    <ul>
      {todos.map((item) => (
        <li key={item.id} className={item.status ? "completed" : ""}>
          <input type="checkbox" onChange={() => changeStatus(item.id)} />
          {item.task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
