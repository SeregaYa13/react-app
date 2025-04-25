import { useState } from "react";

const TextAreaWithLimit = () => {
  const [text, setText] = useState("");
  const maxLength = 100;

  const handleChange = (e) => {
    if (e.target.value.length <= maxLength) {
      setText(e.target.value);
    }
  };

  const remaining = maxLength - text.length;
  const isWarning = remaining <= 10;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Текстовое поле</h2>
      <textarea
        value={text}
        onChange={handleChange}
        style={{
          width: "300px",
          height: "100px",
          border: isWarning ? "2px solid red" : "1px solid #ccc",
        }}
      />
      <div style={{ color: isWarning ? "red" : "black" }}>
        Осталось: {remaining} символов
      </div>
    </div>
  );
};

export default TextAreaWithLimit;
