import React, { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function TodoBoard() {
  const dispatch = useDispatch();

  const [inputTodo, setInputTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputTodo.trim()));
    setInputTodo("");
  };

  return (
    <div className="bg-[#083F5E] md:container px-3 my-10 py-5 font-medium min-h-[75vh] md:w-[50%] rounded-xl flex flex-wrap gap-3 flex-col items-center">
      <h3 className="sm:text-xl text-lg mb-3 font-bold">Your Todos</h3>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          placeholder="Write Your Todo ..."
          onChange={(e) => setInputTodo(e.target.value)}
          value={inputTodo}
          type="text"
          className="sm:px-3 px-2 py-1 text-[#f0fffd] sm:w-[74%] w-[60%] rounded-lg text-sm sm:text-base outline-none leading-8 transition-colors duration-200 ease-in-out bg-[#118ad0] border border-[#118ad0] focus:border-[#0B5783] focus:ring-2 focus:ring-[#118ad0]"
        />

        <button
          className="rounded-lg hover:bg-[#0B5783] duration-300 bg-[#118ad0] ml-3 sm:px-3 px-2 sm:py-2 py-1 border-0 focus:outline-none"
          type="submit"
        >
          ADD
        </button>
      </form>
      <div className="flex flex-wrap text-xs gap-3 justify-around">
        <NavLink
          to=""
          className={(e) =>
            e.isActive
              ? "bg-[#0B5783] rounded-lg duration-200 sm:px-3 px-2 py-1"
              : "bg-[#118ad0] rounded-lg duration-200 sm:px-3 px-2 py-1"
          }
        >
          ALL
        </NavLink>
        <NavLink
          to="/completedtodos"
          className={(e) =>
            e.isActive
              ? "bg-[#0B5783] rounded-lg duration-200 sm:px-3 px-2 py-1"
              : "bg-[#118ad0] rounded-lg duration-200 sm:px-3 px-2 py-1"
          }
        >
          COMPLETED
        </NavLink>
        <NavLink
          to="/notcompletedtodos"
          className={(e) =>
            e.isActive
              ? "bg-[#0B5783] rounded-lg duration-200 sm:px-3 px-2 py-1"
              : "bg-[#118ad0] rounded-lg duration-200 sm:px-3 px-2 py-1"
          }
        >
          NOT COMPLETED
        </NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default TodoBoard;
