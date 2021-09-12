import React, { useState } from 'react'

function UseState() {

    const [msgObj, setMessage] = useState({ id: 1, message: "" });
    const handleChange = (event) => {
        let val = event.target.value;
        setMessage({ ...msgObj, message: val });
        console.log(msgObj);
    }
    return (
        <div>
            <input type="text" value={msgObj.message} onChange={handleChange} />
            <p>{msgObj.message}</p>
        </div>
    )
}

export default UseState;


// setState mein original state object ki baaki properties lose nahi hoti, useState hook me setter method me hojaati hai, 
// isliye advisable to make a shallow copy and then update the required the property
