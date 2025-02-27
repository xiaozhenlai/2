import React from "react";
import Predict from "./SymptomsPrediction/Predict";

const Prediction = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <Predict />
    </div>
  );
};

export default Prediction;
