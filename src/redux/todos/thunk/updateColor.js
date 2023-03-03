import { colorSelected } from "../action";

const updateColor = (todoId, color) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color
      }),
      headers: {
        "content-type": "application/json"
      }
    });

    const data = await res.json();

    dispatch(colorSelected(data.id, data.color))
  }
}

export default updateColor