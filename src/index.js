import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import Confetti from "react-confetti";

const App = () => {
  const [showAnimation, setShowAnimation] = useState(false); // HERE: boolean variable that comes from BE
  const [message, setMessage] = useState(
    "Start editing to see some magic happen"
  );

  useEffect(() => {
    setTimeout(() => {
      setShowAnimation(true);
    }, 2000); // starting time until showing the confetti animation (1/2 sec?)
  }, []);

  const handleOnConfettiComplete = () => {
    setShowAnimation(false);
    setMessage("Animation ended, Post request sent and button available");
    // HERE: post request to inform that animation has been showed
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        textAlign: "right"
      }}
    >
      {showAnimation && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        >
          <Confetti
            gravity={0.1}
            tweenDuration={1500}
            recycle={false}
            numberOfPieces={250}
            width={window.innerWidth}
            height={window.innerHeight}
            onConfettiComplete={handleOnConfettiComplete}
          />
        </div>
      )}
      <p>{message}</p>
      <button onClick={() => setMessage("button clicked")}>
        Button Example
      </button>
    </div>
  );
};

render(<App />, document.getElementById("root"));
