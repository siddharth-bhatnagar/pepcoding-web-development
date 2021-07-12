import React, { useState, useEffect } from 'react';

function Banner() {
    const [count, setCount] = useState(0);
    
    useEffect(()=>{
        console.log("Boom");
    });

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>State: {count}</button>
        </div>
    )
}

export default Banner;
