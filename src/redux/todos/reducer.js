import initilState from "./initialState";
import { ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED } from "./action.types";

function genId(state) {
  const id = state.reduce((result, todo) => Math.max(todo.id, result), 0)
  return id + 1
}

const reducer = (state = initilState, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: genId(state),
          todo: action.payload
        }
      ];

    case TOGGLED:
      return state.map(todo => {
        if (todo.id !== action.payload) {
          return todo
        } else {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      });

    case COLORSELECTED:
      const { todoId, color } = action.payload;
      return state.map(todo => {
        if (todo.id !== todoId) {
          return todo
        } else {
          return {
            ...todo,
            color: color
          }
        }
      })

    case DELETED:
      return state.filter(todo => todo.id !== action.payload);

    case ALLCOMPLETED:
      return state.map(todo => {
        return {
          ...todo,
          completed: true
        }
      });

    case CLEARCOMPLETED:
      return state.filter(todo => !todo.completed)

    default:
      return state;
  }
}

export default reducer