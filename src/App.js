import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


function App () {
    return (
            <div className="App">
                <div className='wrapper'>
                    <header>
                        <HeaderContainer/>
                    </header>
                    <body>
                    <div>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                        <Route path='/dialogs' render={() => <DialogsContainer />}/>
                        <Route path='/users' render={() => <UsersContainer />}/>
                        <Route path='/login' render={() => <Login />}/>
                    </div>
                    </body>
                </div>
            </div>
    );
}

export default App;
