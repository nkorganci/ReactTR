import React from "react";
import Child from "../src/Child.js";

function Parent() {
  return (
    <div className="parent">
      <h1>Parent</h1>
      <Child/>
    </div>
  );
}

export default Parent();
