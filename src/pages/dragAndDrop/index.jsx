import { useState } from "react";
import "./drag.css";
const DragAndDrop = () => {
  const [cardList, setCardList] = useState([
    { id: 1, order: 3, text: "CARD 3" },
    { id: 2, order: 1, text: "CARD 1" },
    { id: 3, order: 2, text: "CARD 2" },
    { id: 4, order: 4, text: "CARD 4" },
  ]);
  const [currentCard, setCurrenrCard] = useState(null);
  function dragStartHandler(e, card) {
    setCurrenrCard(card);
  }
  function dragEndHandler(e) {
    e.target.style.opacity = " 1";
  }
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.opacity = "0.5";
  }

  function dropHandler(e, card) {
    e.preventDefault();
    setCardList(
      cardList.map((c) => {
        if (c.id === card.id) {
          return { ...c, order: currentCard.order };
        }
        if (c.id === currentCard.id) {
          return { ...c, order: card.order };
        }
        return c;
      })
    );
    e.target.style.opacity = "1";
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    } else {
      return -1;
    }
  };

  return (
    <div className="dragContainer">
      {cardList.sort(sortCards).map((card) => (
        <div
          onDragStart={(e) => dragStartHandler(e, card)}
          onDragLeave={(e) => dragEndHandler(e)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropHandler(e, card)}
          draggable={true}
          className={"card"}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
};

export { DragAndDrop };