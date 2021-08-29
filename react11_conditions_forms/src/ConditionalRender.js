import React, { useState } from "react";

import { Card, Navbar, Button } from "react-bootstrap";

const Kart = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
        />
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>React'ı ogrenmek basta biraz zormus</Card.Text>
          <Button variant="danger">Detaylar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid=""
        className="justify-content-center bg-dark p-3"
      >
        <p className="text-light">Copyright 2021</p>
      </Navbar>
    </div>
  );
};

function ConditionalRender() {
  const [goster, setGoster] = useState(false);

  function gosterGizle() {
    setGoster(!goster);
  }
  console.log(goster);

  return (
    <div className="text-center m-5">
      <button onClick={gosterGizle} className="btn btn-warning m-4 p-3">
        goster/gizle
      </button>
      {/* {goster && <Kart />} */}
      {/* 1.degisken dogru ise goster karti */}
      {/* !goster && <Footer /> */}
      {/* 1.degisken dogru is "goster", yoksa "kart" */}
      {/* {goster || <Kart />} */}
      {goster ? ( 
        <div>
          <h1>Kart modulu gosteriliyor</h1>  <Kart /> </div>) 
          : 
          (<div>
         <h1>Footer is shown</h1>
         <Footer />
       </div> )}
    </div>
  );
}

export default ConditionalRender;
