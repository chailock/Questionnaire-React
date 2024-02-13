import React, { useState, useEffect } from "react";
import Home from "./Home";
const Create = () => {
  const [inputSentence, setInputSentence] = useState("");
  const [sentences, setSentences] = useState([]);

  const handleAddSentence = () => {
    const newSentences = [...sentences, inputSentence];
    setSentences(newSentences);
    localStorage.setItem("sentences", JSON.stringify(newSentences));
    setInputSentence("");
  };

  useEffect(() => {
    const storedSentences = JSON.parse(localStorage.getItem("sentences"));
    if (storedSentences) {
      setSentences(storedSentences);
    }
  }, []);

  const handleEditSentence = (index, updatedSentence) => {
    const updatedSentences = [...sentences];
    updatedSentences[index] = updatedSentence;
    setSentences(updatedSentences);
    localStorage.setItem("sentences", JSON.stringify(updatedSentences));
  };

  const handleDeleteSentence = (index) => {
    const updatedSentences = sentences.filter((_, i) => i !== index);
    setSentences(updatedSentences);
    localStorage.setItem("sentences", JSON.stringify(updatedSentences));
  };
  return (
    <div className="container">
      <Home />
      <div className="container__box">
        <div className="creating">
          <h1>Creating a Questionnaire</h1>
          <br />
          <input
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            type="sentence"
            id="sentence"
            value={inputSentence}
            onChange={(e) => setInputSentence(e.target.value)}
          />
        </div>
        <br />
        <div className="list">
          <button
            className="shadow p-3 mb-5 bg-body-tertiary rounded"
            onClick={handleAddSentence}
          >
            Add
          </button>
          <h1>List of Questions</h1>
        </div>
        <div className="questions">
          <div className="retrieve">
            {sentences.map((setSentences, index) => (
              <div className="shadow5 p-3 mb-5 bg-body-tertiary rounded">
                <div className="box-input" key={index}>
                  {setSentences}
                  <div className="icons">
                    <i
                      class="fa-solid fa-pen"
                      onClick={() =>
                        handleEditSentence(
                          index,
                          prompt("Edit sentence:", sentences)
                        )
                      }
                    ></i>
                    <i
                      class="fa-solid fa-trash"
                      onClick={() => handleDeleteSentence(index)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
