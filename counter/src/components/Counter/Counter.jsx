import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
            <hr />
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>
    );
}

export default Counter;
