import React from "react";
import yorumlar from "./data.js";
import "./Yorum.css";
function Yorum(props) {
  const {id,ad, meslek, resim, yorum} = yorumlar[props.index]

  // console.log(yorumlar[props.index]); we can see values in console
  return (
    <div className="yorum-div">
      <h1> {id} </h1>
      <h1> {ad} </h1>
      <h2>{meslek}</h2>
      <img src={resim} alt="" />
      <h3>{yorumlar[props.index].ad}</h3>
      {/* Longer Version */}
    </div>
  );
}

export default Yorum;