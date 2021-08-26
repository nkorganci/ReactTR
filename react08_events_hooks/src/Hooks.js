//Hooks are functional components, rfce

import React,{useState} from "react";

//* =========================== HOOKS =====================================
//! - Hooklar: Class komponentleri yerine fonksiyonel komponentler ile
//!   state'leri kullanmamizi saglayan ozel fonksiyonlardır.
//* - React'a 16.7 versiyonu ile eklenmisitir.
//? - React da useState(), useEffect(), useContext() gibi farklı gorevler icin
//?   yazilmis built-in Hooks'lar vardir.
//* - Ayrica kendi Hook'larimizi yazmamiz da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. Kullanmak icin once import etmek gerekiyor.
//* 2. Hook’lar Sadece En Üst Seviyede Çağrılır. Bir kontrol
//*    deyimi veya for gibi bir dongu icersinde cagiralamazlar.
//* 3. Hook’lar Sadece React Fonksiyonlarından Cagrilir.
//* =========================================================================

function Hooks() {
  //* - useState hook'u en yaygin kullanilan hook'lardandir.
  //* - Bir degisken, dizi ya da nesneye state atayabilmemize olanak saglar.
  //* - 2 donus degeri vardir. 1.si state'i tutan degisken, 2. ise state'i
  //*   degistirmeye yarayan bir (setter) fonksiyondur.

  //* - Array destructring ile useState'in dondurdukeri ayrıstiriliyor.
  //* - sayac'a (state) baslangicte 0 degeri ataniyor.
  //!useState: Returns a stateful value, and a function to update it.


/* 
  const [sayac, setSayac] = useState(0); // Array destructuring
  console.log(useState(0));

  function Arttir() {
    setSayac(sayac + 1);
    clearInterval(sn);
  }

  function Azalt() {
    setSayac(sayac - 1);
    clearInterval(sn);
  }
  function Sifirla() {
    setSayac(0);
    clearInterval(sn);
  }

  // setInterval(Arttir, 10000);
  // clearInterval(10000);
  // setTimeout(Azalt,1000);

  const sn = setInterval(Arttir, 10000000);

  return (
    <div>
      <h1>Sayac:{sayac}</h1>
      <button onClick={Arttir}>Arttir</button>
      <button onClick={Azalt}>Azalt</button>
      <button onClick={Sifirla}>Sifirla</button>
    </div>
  );
}

export default Hooks;
 */