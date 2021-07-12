import React, { useContext, useState } from 'react';
import MyContext from './Context';
import Demo from './Demo';
// import DemoChild from './DemoChild';

function Main() {
    console.log("Render Main"); // runs on every render
    const [count, setCount] = useState(0);
    const context = useContext(MyContext); // the value of context over here (default value)
    console.log("Main: " + context);
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click</button>
            {/* 
            
                Demo and its subtree will not receive the default context, they will receive the passed value
                We can say if Demo and its subtree use the context, they will have subscribed to the passed provider value which 
                is the state here. If the state changes, all components will re-render but Demo components family will be re-render
                according to the new state context, others will take default context if they are using the context in any form.

            */}
            
            <MyContext.Provider value={count}>
                <Demo />
            </MyContext.Provider>
        </div>
    )
}

export default Main;
