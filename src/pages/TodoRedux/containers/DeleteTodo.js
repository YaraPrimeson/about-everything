import { connect } from "react-redux";
import { deleteTodo } from "../../../reducers/action";

const DeleteTodo = ({ dispatch, id }) => {
  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(deleteTodo(id));
        }}
      >
        delete
      </button>
    </div>
  );
};
export default connect()(DeleteTodo);
