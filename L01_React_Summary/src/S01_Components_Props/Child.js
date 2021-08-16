import React from "react";
import "./Child.css"


function Child() {
  return (
    <div className="child">
      <h1>Child</h1>
      <button onClick= { ()=> changeWord("changed")} >Click to change button</button>
    </div>
  );
}

export default Child;
