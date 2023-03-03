import { added } from "../action"

const addTodo = (todo) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todo,
        completed: false
      }),
      headers: {
        "content-type": "application/json"
      }
    })
    
    const data = await response.json();

    dispatch(added(data.text))
  }
}

export default addTodo