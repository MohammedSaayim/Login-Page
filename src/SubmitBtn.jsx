import React from "react";

export default function App(props) {
  return (
    <div>
      <button
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
