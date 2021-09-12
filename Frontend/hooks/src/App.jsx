import React from 'react'
import Banner from './components/Test/Banner';
import Bannerr from './components/Test/Bannerr';
import Context from './components/Test/Context';
import Counter from './components/Test/Counter';
import Listener from './components/Test/Listener';
// import UseState from './components/UseState/UseState';
// import UE3 from './components/UseEffect/UE3';
// import Cleanup from './components/UseEffect/Cleanup';
// import Main from './components/ContextAPI/Main';
import Profile from './components/Test/Profile';
import { ProviderComponent } from './components/Test/ProviderComponent';

function App() {
    return (
        <div>
            {/* <UseState />
            <UE2/>      */}
            {/* <Infinite/>      */}
            {/* <Cleanup /> */}
            {/* <Main />
             */}
            <Profile />
            <Banner />
            <Counter />
            <Bannerr />
            <Context />
            <Listener />
            <ProviderComponent />
            
        </div>
    )
}

export default App;
