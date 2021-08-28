import React,{useState,useEffect} from 'react';

function UseEffectFetch() {
  fetch("https://restcountries.eu/rest/v2/all").then((res)=>
  res.json)

  return (
    <div>
    </div>
  )
}

export default UseEffectFetch
