import React from "react";
import Calories from "./components/Calories";
import "./App.css";

function App() {
  return (
    <div className="App-header">
      <p className="App-text">
        All conversions are based on a 2,000 steps/mile average.
      </p>
      <Calories />
    </div>
  );
}

export default App;
