import React, { useState, useEffect } from 'react';
// There are three variations of useEffect hook.
// The hook runs only after render
// How it will run depends on the dependency array
// cleanup function is a function which is returned by the useEffect hook
// If not dependency array is passed, the cleanup func will run just before the next useEffect is executed
// In the above case, it kind of behaves like componentDidUpdate
// If dependency array is passed, the cleanup will run on unmounting, i.e. it behaves like componentWillUnmount

function Cleanup() {
    console.log("Render");
    
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("UseEffect");
        document.title = `Clicked ${count} times`;
        return () => {
            alert(`I am cleanup of ${count} state`);
        }
    }, []);

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}

export default Cleanup;
