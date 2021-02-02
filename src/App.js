import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App (props) {
    return (
            <div className="App">
                <div className='wrapper'>
                    <header>
                        <HeaderContainer/>
                    </header>
                    <body>
                    <div>
                        <Route path='/profile/:userId' render={() => <ProfileContainer store = {props.store} />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer store ={props.store} />}/>
                        <Route path='/users' render={() => <UsersContainer store = {props.store} />}/>
                    </div>
                    </body>
                </div>
            </div>
    );
}

export default App;
