import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="logo">
            <img src="./images/aud.jpeg" alt="Logo" />
          </div>
          <ul>
            <li>
              <a href="#" onClick={() => navigate("/Create")}>
                Create
              </a>
            </li>
            <li>
              <a href="#" onClick={() => navigate("/Questionnaire")}>
                Questionnaire
              </a>
            </li>
            <li>
              <a href="#" onClick={() => navigate("/dashboard")}>
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="open image">
        <img src="./images/Q.jpg" alt="Logo" />
      </div> */}
    </>
  );
};

export default Home;
