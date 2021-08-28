import React from "react";
import { useState, useEffect } from "react";
function UseEffectFetchError() {
  const [kisiler, setKisiler] = useState([]);
  const url = "https://api.github.com/users";
  useEffect(() => {
    fetch(url)
    .then((res)=>res.json)
    .then((data)=>setKisiler(data))
  }, []);
  return <div></div>;
}

export default UseEffectFetchError;
