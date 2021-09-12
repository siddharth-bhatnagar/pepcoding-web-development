import React, { useContext, createContext } from 'react';

const MyContext = createContext(1);

function Context() {
    return (
        <div>
            <p>{useContext(MyContext)}</p>
            <MyContext.Provider value={2}>
                <p>{useContext(MyContext)}</p>
            </MyContext.Provider>
        </div>
    )
}

export default Context;
