import React, { isValidElement } from 'react'

function Liste(props) {
  console.log(props.kisiler);
  return (
    <div>
    {/* const {isim, yas, resim }= kisiler[0] */}
      
    </div>
  )
}

export default Liste


/* export default Liste;
import React from "react";

function Liste(props) {
  const { kisi } = props;
  return (
    <div>
      {kisi.map((k) => {
        const { id, isim, resim, yas } = k;
        return (
          <div className="kisi" key={id}>
            <img src={resim} alt="" />
            <div>
              <h4>{isim}</h4>
              <p>{yas} Yasinda</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Liste; */
