import React, { useState } from "react";
import "./Form.css";

function Form01() {
  const [ad, setAd] = useState("");

  function adGuncelle(event) {
    // console.log(event.target.value);
    setAd(event.target.value);
  }

  return (
    <div className="alan">
      <h1>Merhaba {ad}</h1>
      <form>
        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required=""
          onChange={adGuncelle}
          value={ad}
        />

        <input
          className="input"
          type="text"
          placeholder="adiniz"
          name="ad"
          required=""
          onChange={adGuncelle}
          value={ad}
        />
      </form>
    </div>
  );
}

export default Form01;
