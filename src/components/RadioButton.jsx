import React from "react";

function RadioButton({ selectedOption, onOptionChange }) {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    onOptionChange(value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="Agree"
          checked={selectedOption === "Agree"}
          onChange={handleOptionChange}
        />
        Agree
      </label>
      <label>
        <input
          type="radio"
          value="Neutral"
          checked={selectedOption === "Neutral"}
          onChange={handleOptionChange}
        />
        Neutral
      </label>
      <label>
        <input
          type="radio"
          value="Disagree"
          checked={selectedOption === "Disagree"}
          onChange={handleOptionChange}
        />
        Disagree
      </label>
    </div>
  );
}

export default RadioButton;
