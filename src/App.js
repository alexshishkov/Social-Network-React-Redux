import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <div className='wrapper'>
                <header>
                    <Header/>
                </header>
                <body>
                <div>
                    <Profile/>
                </div>
                </body>
            </div>
        </div>
    );
}

export default App;
