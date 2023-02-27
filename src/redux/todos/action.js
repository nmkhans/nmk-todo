import { ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLETED, CLEARCOMPLETED } from "./action.types";

export const added = (todo) => {
  return {
    type: ADDED,
    payload: todo
  }
}

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId
  }
}

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId
  }
}

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId,
      color
    }
  }
}

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED
  }
}

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED
  }
}