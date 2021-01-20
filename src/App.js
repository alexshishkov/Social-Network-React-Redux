import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


function App (props) {
    return (
            <div className="App">
                <div className='wrapper'>
                    <header>
                        <Header/>
                    </header>
                    <body>
                    <div>
                        <Route path='/profile' render={() => <Profile store = {props.store} />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer store ={props.store} />}/>
                        <Route path='/users' render={() => <UsersContainer store = {props.store} />}/>
                    </div>
                    </body>
                </div>
            </div>
    );
}

export default App;
