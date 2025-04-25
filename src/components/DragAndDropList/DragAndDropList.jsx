import { useState } from "react";

function DragAndDropList({ items }) {
  const [list, setList] = useState(items);
  const [draggedItemIndex, setDraggedItemIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedItemIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (index) => {
    const newList = [...list];
    const draggedItem = newList.splice(draggedItemIndex, 1)[0];
    newList.splice(index, 0, draggedItem);
    setList(newList);
    setDraggedItemIndex(null);
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li
          key={index}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          style={{
            padding: "8px",
            margin: "4px",
            backgroundColor: "#f0f0f0",
            border: "1px solid #ccc",
            opacity: draggedItemIndex === index ? 0.5 : 1,
            cursor: "grab",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default DragAndDropList;
