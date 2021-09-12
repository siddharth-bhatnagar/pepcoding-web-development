import React, { Component } from 'react';
import Test2 from './Test2';

export const NameContext = React.createContext();
export const AgeContext = React.createContext();

export class ProviderComponent extends Component {
    // constructor(props) {
    //     super();
    // }

    render() {
        return (
            <div>
                <NameContext.Provider value="Backbencher">
                    <AgeContext.Provider value="23">
                        <Test2 />
                    </AgeContext.Provider>
                </NameContext.Provider>
            </div>
        )
    }
}
