import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {setTodoPage} from "../store/action-creators/todo";

const TodoList:React.FunctionComponent = () => {
  const pages = [1,2,3,4,5]

  const {page, error, loading, todos, limit } = useTypedSelector(state => state.todo)

  const {fetchTodos, setTodoPage} = useActions()

  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if(loading) {
    return <h1>Loading...</h1>
  }
  if(error) {
    return <h1>{error}</h1>
  }

  return (
    <div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.title}
          </div>
        )
      })}

      <div style={{ display: "flex" }}>
        {pages.map(p => {
          return (
            <div
              key={p}
              onClick={() => {
                setTodoPage(p)
              }}
              style={{
                border:p === page ? "2px solid green" : "2px solid gray", padding: 10, cursor: "pointer", margin: "10px 6px"
              }}
            >
              {p}
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default TodoList;