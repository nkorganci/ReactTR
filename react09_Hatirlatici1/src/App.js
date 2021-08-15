import React, { useState } from "react";
import data from "./data.js";
import Liste from "./Liste.js";

function App() {
  const [kisiler, setKisiler] = useState(data);
  console.log(kisiler);

  function temizle() {
    setKisiler([]);
  }

  return (
    <main>
      <section className="container">
        <h2>bugun {data.length} vardir</h2>
        <Liste kisiler={kisiler} />
        <button onClick={temizle}>Temizle</button>
      </section>
    </main>
  );
}

export default App;
