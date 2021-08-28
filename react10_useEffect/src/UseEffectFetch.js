import React, { useState, useEffect, version } from "react";

function UseEffectFetch() {
  //This is a GET method, if you want to update or put, you need to write "post"...in addres with comma
  //Fetch method return data in this function, so useState need to be assigned.
  
  const[ulkeler,setUlkeler]=useState([]);
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => setUlkeler(data));
    .catch((err) => console.log(err));

  return <div></div>;
}

export default UseEffectFetch;
