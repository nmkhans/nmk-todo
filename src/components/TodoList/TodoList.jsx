import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todo from "../Todo/Todo";
import fetchTodos from './../../redux/todos/thunk/fetchTodos';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodos)
  }, [dispatch])

  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {todos
        .filter((todo) => {
          const { status } = filters;
          switch (status) {
            case "complete":
              return todo.completed;

            case "incomplete":
              return !todo.completed;

            default:
              return true;
          }
        })
        .filter((todo) => {
          const { colors } = filters;
          if (colors.length > 0) {
            return colors.includes(todo?.color);
          } else {
            return true;
          }
        })
        .map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
    </div>
  );
};

export default TodoList;
