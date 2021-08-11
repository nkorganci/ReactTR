//Hooks are functional components, rfce

import React from "react";
import { useState } from "react";
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



 
  return (
    <div>

    <button>Arttir</button>

    </div>
  );
}

export default Hooks;
