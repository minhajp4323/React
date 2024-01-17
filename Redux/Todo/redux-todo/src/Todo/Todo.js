import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, deleteTodo, editTodo } from "./Reducer";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoSaveSharp } from "react-icons/io5";
import { MdOutlineAddTask } from "react-icons/md";

import "./Todo.css";

function Todo() {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [Todo, setTodo] = useState("");
  const updateitem = useRef(null);

  const addHandle = (Id) => {
    if (Todo.length > 0) {
      dispatch(addTodo(Todo));
      setTodo("");
    }
  };
  const updateHandle = (Id) => {
    if (updateitem.current.value.length > 0) {
      dispatch(updateTodo({ id: Id, task: updateitem.current.value }));
    }
  };
  return (
    <div>
      <h1>ToDo List</h1>
      <div className="add-task">
        <input
          type="text"
          value={Todo}
          onChange={(e) => setTodo(e.target.value)}
          className="add-input"
          style={{ width: "250px" }}
        />
        <button
          className="ButtonAdd"
          onClick={addHandle}
          style={{ display: "flex" }}
        >
          <MdOutlineAddTask />
        </button>
      </div>
      <div>
        <div className="all-todos">
          <div style={{ maxWidth: "900px", width: "100%" }}>
            {todo.map((Data) => (
              <div className="todo-list">
                {Data.edit ? (
                  <>
                    <input
                      type="text"
                      ref={updateitem}
                      defaultValue={Data.task}
                      className="add-input"
                      style={{ width: "250px" }}
                    />
                    <div className="edit-div">
                      <button
                        onClick={() => updateHandle(Data.id)}
                        className="ButtonAdd"
                      >
                        <IoSaveSharp />
                      </button>
                      <button
                        onClick={() => dispatch(deleteTodo(Data.id))}
                        className="ButtonAdd"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h6 className="m-0" style={{ overflow: "hidden" }}>
                      {Data.task}
                    </h6>
                    <div className="edit-div">
                      <button
                        onClick={() => dispatch(editTodo(Data.id))}
                        className="ButtonAdd"
                      >
                        <FiEdit />
                      </button>
                      <button
                        onClick={() => dispatch(deleteTodo(Data.id))}
                        className="ButtonAdd"
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Todo;
