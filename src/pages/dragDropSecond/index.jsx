import { useState } from "react";
import "./dragSecond.css";

const DragSecond = () => {
  const [boards, setBoards] = useState(
    {
      id: 1,
      title: "Do",
      items: [
        { id: 1, title: "buy car" },
        { id: 2, title: "do something" },
        { id: 3, title: "walk" },
      ],
    },
    {
      id: 2,
      title: "Check",
      items: [
        { id: 4, title: "buy banan" },
        { id: 5, title: "do something" },
        { id: 6, title: "run" },
      ],
    },
    {
      id: 3,
      title: "Done",
      items: [
        { id: 7, title: "buy tomato" },
        { id: 8, title: "do something" },
        { id: 9, title: "sport" },
      ],
    }
  );
  return (
    <div className="dragSecond">
      <div>
        {boards.map((board) => (
          <div className="board">
            <div className="board__title">{board.title}</div>
            {board.items.map((item) => (
              <div className="item">{item.title}</div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export { DragSecond };
