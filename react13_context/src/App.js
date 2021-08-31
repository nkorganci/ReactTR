import React, { useState } from "react";
import data from "./data";
import KisiList from "./KisiList";
import { KisilerContext } from "./context/KisilerContext";

function App() {
  const [kisiler, setKisiler] = useState(data);
  const renkDegistir = (id, renk) => {
    setKisiler(
      kisiler.map((kisi) => (kisi.id === id ? { ...kisi, renk: renk } : kisi))
    );
  };

  return (
    //Olusturdugumuz Context'in provider ile tum komponentleri sarmaladik.
    //Bu sayede butun komponentler contextte bunanan degisken v.b paylasilabilir.

    //Provider in value kismina  Context te paylasmak istedigimiz ( fonksiyon,degisken)
    // seyleri
    <KisilerContext.Provider value={{ kisiler, renkDegistir }}>
      <div>
        <header>
          <h1>Merhaba</h1>
        </header>
        {/* <KisiList kisiler={kisiler} renkDegistir={renkDegistir} /> */}
        {/* <KisiList kisiler={kisiler} /> */}
        <KisiList />
      </div>
    </KisilerContext.Provider>
  );
}

export default App;
