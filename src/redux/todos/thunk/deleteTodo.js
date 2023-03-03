import { deleted } from "../action";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
      body: JSON.stringify({
        id: todoId
      }),
      headers: {
        "content-type": "application/json"
      }
    });

    const data = await res.json();

    dispatch(deleted(todoId))
  }
}

export default deleteTodo