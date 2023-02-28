import React, { useState } from "react";
import noteImage from "../../assets/notes.png";
import plusImage from "../../assets/plus.png";
import tickImage from "../../assets/double-tick.png";
import { useDispatch } from "react-redux";
import {
  added,
  allCompleted,
  clearCompleted,
} from "./../../redux/todos/action";

const Header = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(added(input));
    setInput("");
  };

  const handleCompleteAllTask = () => {
    dispatch(allCompleted());
  };

  const handleClearCompletedTask = () => {
    dispatch(clearCompleted());
  };

  return (
    <header>
      <div>
        <form
          onSubmit={handleSubmit}
          className="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
          <img src={noteImage} className="w-6 h-6" alt="Add todo" />
          <input
            onChange={handleInput}
            value={input}
            type="text"
            placeholder="Type your todo"
            className="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
          />
          <button
            type="submit"
            className={`appearance-none w-8 h-8 bg-[url('${plusImage}')] bg-no-repeat bg-contain`}
          ></button>
        </form>

        <ul className="flex justify-between my-4 text-xs text-gray-500">
          <li
            onClick={handleCompleteAllTask}
            className="flex space-x-1 cursor-pointer"
          >
            <img className="w-4 h-4" src={tickImage} alt="Complete" />
            <span>Complete All Tasks</span>
          </li>
          <li onClick={handleClearCompletedTask} className="cursor-pointer">
            Clear completed
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
