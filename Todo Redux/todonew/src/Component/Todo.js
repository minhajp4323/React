import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Reducers, { addTask, editTask, deleteTask, Completed } from "./Reducers";

function Todo() {
  const todoList = useSelector((reducer) => reducer.todo);
  // console.log(todoList);

  return (
    <div>
      <div>
        <h1>My Todo</h1>
      </div>
      <div>
        <form>
          <input type="text" required/>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <table>
          {todoList?.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{item.task}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}

export default Todo;
