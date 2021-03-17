import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const NavBar = () => {
  return (
    <div>
      <div>
        <Link to="drag-and-drop" style={{ textDecoration: "none" }}>
          <Button color="primary" className="open-btn">
            Drag And Drop
          </Button>
        </Link>
      </div>
      <div>
        <Link to="/count" style={{ textDecoration: "none" }}>
          <Button color="primary" className="open-btn">
            Count
          </Button>
        </Link>
      </div>
    </div>
  );
};

export { NavBar };
