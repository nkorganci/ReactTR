import React from "react";

function Events() {
  let baslik = "OLAYLAR";
  function handleTikla() {
    console.log("Tikla tiklandi");
  }
  return (
    <div>
      <h1>{baslik}</h1>
      {/* Do not use handleTikla() with paranthesis */}
      <button onClick={handleTikla}>Tikla</button>
      <button onClick={() => console.log("sil butonu")}>Sil</button>
      <button conClick={()=> handleYaz("Ahmet") }>Yaz</button>
    </div>
  );
}

export default Events;
