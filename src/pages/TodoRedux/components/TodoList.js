import Todo from "./Todo";

const TodoList = ({ toggleTodo, todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
    ))}
  </ul>
);
export default TodoList;
