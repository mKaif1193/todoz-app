import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdEdit, MdDelete } from "react-icons/md";
import {
  deleteTodo,
  toggleComplete,
  getFromLS,
  setToLS,
} from "../features/todoSlice";

function NotCompletedTodos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFromLS());
  }, []);

  useEffect(() => {
    dispatch(setToLS());
  }, [todos]);

  return (
    <div className="w-full">
      {todos && todos.length > 0 ? (
        todos.length !== 1 &&
        todos[0].id !== "TODOZ is Created By Kaif (@mkaif56)" ? (
          <ul className="list-none">
            {todos.map(
              (todo) =>
                todo.id !== "TODOZ is Created By Kaif (@mkaif56)" &&
                !todo.isCompleted && (
                  <li
                    key={todo.id}
                    className="flex flex-wrap mt-2 gap-5 justify-between items-center px-3 py-2"
                  >
                    <div className="min-w-[70%]">
                      <input
                        type="checkbox"
                        className="cursor-pointer"
                        checked={todo.isCompleted === true ? true : false}
                        onChange={() => dispatch(toggleComplete(todo.id))}
                      />
                      <label
                        className={`cursor-text sm:font-medium ml-3 text-base sm:text-lg ${
                          todo.isCompleted
                            ? "line-through text-[#f0fffdae]"
                            : ""
                        }`}
                      >
                        {todo.text}
                      </label>
                    </div>
                    <div className="w-[10%]">
                      <button
                        className="text-red-600"
                        onClick={() => dispatch(deleteTodo(todo.id))}
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </li>
                )
            )}
          </ul>
        ) : (
          <div className="font-light text-sm sm:text-base text-center text-[#f0fffdae] mt-5 italic">
            No Todos are Available
          </div>
        )
      ) : (
        <div className="font-light text-sm sm:text-base text-center text-[#f0fffdae] mt-5 italic">
          No Todos are Available
        </div>
      )}
    </div>
  );
}

export default NotCompletedTodos;
