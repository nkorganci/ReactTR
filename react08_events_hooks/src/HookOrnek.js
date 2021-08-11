import React from 'react'

const HookOrnek = () => {
    const [isim, setisim] = useState("Can");
    const [meslek, setMeslek] = useState("Developer");
    const [yas,setYas]=useState("23");
    return (
        <div>

        <h1>{isim</h1>
        <h2>{meslek</h2>
        <h2>{yas}</h2>
        <button onClick={degistir}> Degistir</button>
            
        </div>
    )
}

export default HookOrnek
