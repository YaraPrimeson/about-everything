import { useState } from "react";
import Button from "@material-ui/core/Button";
const Count = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <Button
        onClick={() => setCount(count + 1)}
        variant="contained"
        color="secondary"
      >
        +
      </Button>
      <Button
        onClick={() => setCount(count - 1)}
        variant="contained"
        color="primary"
      >
        -
      </Button>
    </div>
  );
};

export { Count };
