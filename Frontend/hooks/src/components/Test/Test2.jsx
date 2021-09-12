import React, { useContext } from 'react'
import { NameContext, AgeContext } from './ProviderComponent';

function Test2() {
    const name = useContext(NameContext);
    const age = useContext(AgeContext);

    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default Test2;
