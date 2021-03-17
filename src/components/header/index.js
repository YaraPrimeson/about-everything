import { useState } from "react";
import { Modal } from "../modal/modal";
import Button from "@material-ui/core/Button";
import "./header.css";
const Header = () => {
  const [count, setCount] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  return (
    <div className="header__container">
      <div>
        <Button
          color="secondary"
          className="open-btn"
          onClick={() => setModalActive(true)}
        >
          open modal
        </Button>
        <Modal active={modalActive} setActive={setModalActive}>
          <div className="hello">
            hello
            <p className="number">{count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};
export { Header };
