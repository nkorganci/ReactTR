import React from "react";
import Kisi from "./Kisi";
import Mesaj from "./Mesaj";

function App() {
  return (
    <div>
      {/*  <Mesaj name="Enver"/>
  <Mesaj name="Enver1"/>
  <Mesaj name="Enver2"/> */}
      <Kisi 
      ad="canan" 
      tel="45455" 
      resim="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg" />
      
      <Kisi 
      ad="canan1" 
      tel="45455222222" 
      resim="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/220px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg" />
    </div>
  );
}

export default App;
