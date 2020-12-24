import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


function App (props) {
    return (
        <BrowserRouter>
            <div className="App">
                <div className='wrapper'>
                    <header>
                        <Header/>
                    </header>
                    <body>
                    <div>
                        <Route path='/profile' render={() => <Profile state = {props.state.profile} dispatch = {props.dispatch} newPostText = {props.state.profile.newPostText}/>}/>
                        <Route path='/dialogs' render={() => <Dialogs state ={props.state.dialog} dispatch = {props.dispatch} />}/>
                    </div>
                    </body>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
