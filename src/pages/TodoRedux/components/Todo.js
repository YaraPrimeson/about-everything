import DeleteTodo from "../containers/DeleteTodo";

const Todo = ({ onClick, id, text, completed }) => {
  return (
    <li
      onClick={onClick}
      style={
        ({ textDecoration: completed ? "line-through" : "none" },
        { cursor: "pointer" })
      }
    >
      <span>{text}</span>
      <DeleteTodo id={id} />
    </li>
  );
};
export default Todo;
