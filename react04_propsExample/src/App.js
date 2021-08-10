import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Yorum from "./components/yorum/Yorum";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-yorum">
        <Yorum index="0" />
        <Yorum index="1" />
        <Yorum index="2" />
        <Yorum index="3" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
