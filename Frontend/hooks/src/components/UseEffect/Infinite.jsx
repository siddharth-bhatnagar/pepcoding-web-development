import React, { useEffect, useState } from 'react';
// Variation 1 of useEffect with empty dependency array
// state update in useEffect

function Infinite() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("useEffect");
        setCount(parseInt(Math.random()*100));
    }, []);

    console.log("render");

    return (
        <>
            <h1>You have clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default Infinite;
