import { loadded } from './../action';

const fetchTodos = async (dispatch) => {
  const res = await fetch("http://localhost:9000/todos");
  const data = await res.json();
  console.log(data)

  dispatch(loadded(data))
}

export default fetchTodos