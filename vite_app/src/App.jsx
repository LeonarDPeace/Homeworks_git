import { useSelector, useDispatch } from "react-redux";
import { increment } from "./store/slices/counterSlice";
import { useGetTodosQuery } from "../services/todosApi";

export const App = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error al cargar los datos</p>

  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  )
};

export default App;