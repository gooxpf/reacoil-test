import React from 'react';
import {RecoilRoot} from 'recoil';
import AppWrapper from "./components/app/AppWrapper";

function App() {
    return (
        <div className="App">
            <RecoilRoot>
                <AppWrapper />
            </RecoilRoot>
        </div>
    );
}

export default App;
