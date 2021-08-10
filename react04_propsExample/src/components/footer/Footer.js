import React from "react";

function Footer() {
    const data= new Date();
    const today=data.getFullYear();
  return <div>
      <p> Copyright @ {today} </p>
  </div>;
}

export default Footer;
