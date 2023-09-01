import React from "react";
import Home from "./Home";
import RadioButton from "./RadioButton";
import { useState } from "react";
import { useEffect } from "react";

import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const responses = location.state?.responses || [];
  const [agreeCount, setAgreeCount] = useState(location.state?.agreeCount || 0);
  const [disagreeCount, setDisagreeCount] = useState(
    location.state?.disagreeCount || 0
  );
  const [neutralCount, setNeutralCount] = useState(
    location.state?.neutralCount || 0
  );

  useEffect(() => {
    setAgreeCount(location.state?.agreeCount || 0);
    setDisagreeCount(location.state?.disagreeCount || 0);
    setNeutralCount(location.state?.neutralCount || 0);
  }, [location.state]);

  return (
    <div className="container">
      <Home />
      <div className="dash">
        <h1>Dashboard</h1>

        <div className="result">
          <span className="result-item">
            Questions:
            <span className="result-number">{responses.length}</span>
          </span>
          <span className="result-item">
            Agreement:
            <span className="result-number">{agreeCount}</span>
          </span>
          <span className="result-item">
            Disagreement:
            <span className="result-number">{disagreeCount}</span>
          </span>
          <span className="result-item">
            Neutral:
            <span className="result-number">{neutralCount}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
