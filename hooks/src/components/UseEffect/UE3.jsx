import React, { useState, useEffect } from 'react'
import './UE3.css';
// Pass the state variable as dependency in dependency array of useeffect
// That way the hook runs only when there is a change in that variable

function UE3() {
    console.log("render");

    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        console.log("useEffect");
        document.title = `Clicked ${count} times`;
    }, [count]);

    return (
        <div className={darkMode? 'view dark-mode': 'view'}>
            <label htmlFor="dark-mode">Dark Mode</label>
            <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default UE3;
