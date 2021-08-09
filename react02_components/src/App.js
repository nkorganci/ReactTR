import Saat from "../src/saat/Saat.jsx";
import Footer from "./Footer/Footer.js";
const stil = {
  color: "pink",
  textAlign: "center",
};

function App() {
  return (
    <div >
      <h1 style={stil}>Welcome to react course</h1>
      <Saat />
      <Footer />
    </div>
  );
}

export default App;
