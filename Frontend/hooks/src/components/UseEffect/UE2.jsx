import React, { useEffect, useState } from 'react';
// Variation 2 of useEffect
// empty dependency array passed
// Runs after first render only
// Behaves like componentDidMount

function UE2() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("useEffect");
        document.title = `Clicked ${count} times`;
    }, []);

    console.log("render");

    return (
        <>
            <h1>You have clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default UE2;
