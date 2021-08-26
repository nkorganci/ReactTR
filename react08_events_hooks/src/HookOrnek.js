import React from "react";
import {useState} from "react";

function HookOrnek() {

  //! 1st Way:  
  const [isim, setIsim] = useState("Can");
  const [meslek, setMeslek] = useState("Teacher");
  const [yas, setYas]=useState("29");

/*   //? 1st way
  const degistir=function(){
      setIsim("Mirza");
      setMeslek("ENgineer");
      setYas("22");
  }; */

  //! 2nd Way: shorter

  const [kisi,setKisi]=useState({
      isim:"hi",
      meslek:"balikci",
      yas:43
  })
  function degistir (){

    setKisi({isim:"can", meslek:"sofor", yas:"33"});


  };
  

 return (
    <div>
      {/* 
      //? 1st Method tiems
      <h2>Isim:{isim}</h2>
      <h2>Meslek:{meslek}</h2>
      <h2>Yas:{yas}</h2> */}
      
    {/* //? 2nd Way  */}st
     
      <h2>Isim:{kisi.isim}</h2>
      <h2>Meslek:{kisi.meslek}</h2>
      <h2>Yas:{kisi.yas}</h2>

      <button onClick={degistir}> Degistir</button>
    </div>
  );
}

export default HookOrnek;