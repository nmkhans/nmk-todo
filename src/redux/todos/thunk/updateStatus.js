import { toggled } from './../action';

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus
      }),
      headers: {
        "content-type": "application/json"
      }
    });

    const data = await res.json()

    dispatch(toggled(data.id))

  }
}

export default updateStatus