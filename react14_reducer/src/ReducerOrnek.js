import React, { useState } from "react";

const ReducerOrnek = () => {
  const [yukleniyor, setYukleniyor] = useState(false);
  const [resim, setResim] = useState("");
  const [hata, setHata] = useState("");

  const getir = () => {
    setResim("");
    setHata("");
    setYukleniyor(true);

    fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data)=>{
      setYukleniyor(false);
      setResim(data.message);
    }).catch(()={ 
      setYukleniyor(false);
      setHata("Hata veriler cekilemedi");
    })
  };



  return (
    <div>
      <button onClick={getir} disable={yukleniyor}>
        GETIR
      </button>
    </div>
  );
};

export default ReducerOrnek;
