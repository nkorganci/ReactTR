import React from 'react';

const Kisi = (props)=>{
    return (
        <div>
            <h3>My Name is:{props.ad} </h3>
            <img width="30%" src={props.img} alt="hi"/>
            <p>Phone Numer: {props.phone}</p>
        </div>
    );
};

export default Kisi;