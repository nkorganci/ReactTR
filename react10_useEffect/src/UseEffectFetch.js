//* GET API FROM RESTCOUNTRIES
import React, { useState, useEffect, version } from "react";

function UseEffectFetch() {
  //This is a GET method, if you want to update or put, you need to write "post"...in addres with comma
  //Fetch method return data in this function, so useState need to be assigned.

  const [ulkeler, setUlkeler] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setUlkeler(data));
    // .catch((err) => console.log(err));
  }, []);
  // [] means render just one time

  return (
    <div>
      <h1>ULKE BILGILERI</h1>
      {ulkeler.map((ulke) => {
        return (
          <div
            key={ulke.id}
            className="d-flex justify-content-center text-center mt-5 bg-warning"
          >
            <img src={ulke.flag} alt="" width="20%" />
            <p>{ulke.name}</p>
            <h1>{ulke.capital} </h1>
          </div>
        );
      })}
    </div>
  );
}

export default UseEffectFetch;
