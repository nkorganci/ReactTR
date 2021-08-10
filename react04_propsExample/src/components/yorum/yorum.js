import React from "react";
import yorumlar from "./data.js";
function Yorum(props) {

  console.log(yorumlar[props.index]);
  return <div>
    <h1> {yorumlar[props.index].ad} </h1>
  </div>;
}

export default Yorum;
