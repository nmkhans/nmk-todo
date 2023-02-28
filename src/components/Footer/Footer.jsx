import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../../redux/filters/action";

const todosLeft = (num) => {
  switch (num) {
    case 0:
      return "No Task Left.";

    case 1:
      return "1 Task Left.";

    default:
      return `${num} Tasks Left.`;
  }
};

const Footer = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const remainingTodos = todos.filter((todo) => !todo.completed).length;
  const { status, colors } = filters;

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChanged = (color) => {
    if (colors.includes(color)) {
      dispatch(colorChanged(color, "remove"));
    } else {
      dispatch(colorChanged(color, "add"));
    }
  };

  return (
    <footer>
      <div className="mt-4 flex justify-between text-xs text-gray-500">
        <p>{todosLeft(remainingTodos)}</p>
        <ul className="flex space-x-1 items-center text-xs">
          <li
            onClick={() => handleStatusChange("all")}
            className={`cursor-pointer ${status === "all" && "font-bold"}`}
          >
            All
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("incomplete")}
            className={`cursor-pointer ${
              status === "incomplete" && "font-bold"
            }`}
          >
            Incomplete
          </li>
          <li>|</li>
          <li
            onClick={() => handleStatusChange("complete")}
            className={`cursor-pointer ${status === "complete" && "font-bold"}`}
          >
            Complete
          </li>
          <li></li>
          <li></li>
          <li
            onClick={() => handleColorChanged("green")}
            className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
              colors.includes("green") && "bg-green-500"
            }`}
          ></li>
          <li
            onClick={() => handleColorChanged("red")}
            className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
              colors.includes("red") && "bg-red-500"
            }`}
          ></li>
          <li
            onClick={() => handleColorChanged("yellow")}
            className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
              colors.includes("yellow") && "bg-yellow-500"
            }`}
          ></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
