import React from "react";

export default function App(props) {
  return (
    <div className="signUpDiv">
      <button
        className="signUpBtn"
        style={{
          color: props.btnColor,
          borderColor: props.borderCol
        }}
      >
        Sign Up
      </button>
    </div>
  );
}
