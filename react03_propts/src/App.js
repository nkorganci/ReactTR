//! props:
import Mesaj from "../src/Mesaj";
import Kisi from "./Kisi";

function App() {
  return (
    <div className="App">
      <Mesaj ad="Ahmet" />
      <Mesaj ad="Mehmet" />
      <Mesaj ad="Bera" />

      <Kisi
        ad="Bera1"
        phone="1234"
        img="https://www.clipartmax.com/png/middle/475-4758153_face-icon-clipart-computer-icons-clip-art-face-icon.png"
      />
      <Kisi
        ad="Enver"
        phone="1234"
        img="https://www.clipartmax.com/png/middle/475-4758153_face-icon-clipart-computer-icons-clip-art-face-icon.png"
      />
    </div>
  );
}

export default App;
