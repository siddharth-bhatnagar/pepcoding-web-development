import React, { useContext } from 'react';
import MyContext from './Context';

function DemoChild() {
    console.log("Render DemoChild");
    const val = useContext(MyContext);
    console.log("DemoChild: " + val);
    return (
        <div>
            <p>{val}</p>
        </div>
    )
}

export default DemoChild;
