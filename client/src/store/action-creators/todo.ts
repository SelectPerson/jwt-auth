import {Dispatch} from "redux";
import axios from "axios";
import {TodoAction, TodoActionsTypes} from "../../types/todo";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS })
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
        params: { _page: page, _limit: limit }
      })
      console.log("res", page)
      dispatch({ type: TodoActionsTypes.FETCH_TODOS_SUCCESS, payload: res.data })
    } catch (e) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: 'Error'
      })
    }
  }
}

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page }
}
