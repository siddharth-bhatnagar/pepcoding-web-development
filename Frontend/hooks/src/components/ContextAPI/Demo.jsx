import React, { useContext } from 'react';
import MyContext from './Context'; 
import DemoChild from './DemoChild';

function Demo() {
    console.log("Render Demo");
    const val = useContext(MyContext);
    console.log("Demo Context: " + val);
    return (
        <div>
            <DemoChild />
        </div>
    )
}

export default React.memo(Demo);
