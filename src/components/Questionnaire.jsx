import React, { useState, useEffect } from "react";
import Home from "./Home";
import RadioButton from "./RadioButton";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const [sentences, setSentences] = useState([]);
  const [response, setResponse] = useState([]);
  const [agreeCount, setAgreeCount] = useState(0);
  const [disagreeCount, setDisagreeCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSentences = JSON.parse(localStorage.getItem("sentences"));
    if (storedSentences) {
      setSentences(storedSentences);
      setResponse(new Array(storedSentences.length).fill("")); // Initialize response array
    }
  }, []);

  const handleResponseChange = (index, value) => {
    const newResponse = [...response];
    newResponse[index] = value;
    setResponse(newResponse);

    if (value === "Agree") {
      setAgreeCount((prevCount) => prevCount + 1);
    } else if (value === "Disagree") {
      setDisagreeCount((prevCount) => prevCount + 1);
    } else if (value === "Neutral") {
      setNeutralCount((prevCount) => prevCount + 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/Dashboard", {
      state: {
        responses: response,
        agreeCount: agreeCount,
        disagreeCount: disagreeCount,
        neutralCount: neutralCount,
      },
    });
  };

  return (
    <div className="container">
      <Home />
      <div className="container__box">
        <div className="questionnaire">
          <h1>Questionnaire</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="radio-inline-container">
              {sentences.map((sentence, index) => (
                <div
                  className="shadow-1 p-3 mb-5 bg-body-tertiary rounded"
                  key={index}
                >
                  {sentence}
                  <div className="radio-button">
                    <RadioButton
                      selectedOption={response[index]} // Pass the selected option for this index
                      onOptionChange={(value) =>
                        handleResponseChange(index, value)
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <button
              className="shadow p-3 mb-5 bg-body-tertiary rounded"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Questionnaire;
