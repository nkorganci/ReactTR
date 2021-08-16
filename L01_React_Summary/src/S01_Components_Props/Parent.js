import React from "react";
import Child from "./Child";
import "./Parent.css"


function Parent() {
  const [word,setWord]=
  return (
    <div className="parent">
      <h1>Parent</h1>
      <Child changeWord={word=> setWord(word)}/>
    </div>
  );
}

export default Parent;
