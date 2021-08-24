import React from "react";

function Kisi(props) {
  return  (
  <div>
    <h1>{props.ad}</h1>
    <img src={props.resim} alt="resim"/>
    <p>{props.tel}</p>
  </div>
  )
};
export default Kisi;
