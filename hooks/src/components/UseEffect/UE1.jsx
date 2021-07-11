import React, { useEffect, useState } from 'react';
// Variation 1 of useEffect
// No dependency array passed
// Runs after every render
// Behaves like componentDidMount and componentDidUpdate from class components

function UE1() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("useEffect");
        document.title = `Clicked ${count} times`;
    });

    console.log("render");

    return (
        <>
            <h1>You have clicked {count} times</h1>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </>
    )
}

export default UE1;
