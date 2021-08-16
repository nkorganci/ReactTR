import React from "react";
import Child from "./Child";
import "./Parent.css"


function Parent() {
  return (
    <div className="parent">
      <h1>Parent</h1>
      <Child/>
    </div>
  );
}

export default Parent;
