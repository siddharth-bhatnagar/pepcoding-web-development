import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>This is a counter application</h1>
            <Link to="/counter">
                <button>Counter</button>
            </Link>
        </div>
    );
}

export default Home;
