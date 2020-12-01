import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='wrapper'>
                    <header>
                        <Header/>
                    </header>
                    <body>
                    <div>
                        <Route path='/profile' component={Profile}/>
                        <Route path='/dialogs' component={Dialogs}/>
                    </div>
                    </body>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
