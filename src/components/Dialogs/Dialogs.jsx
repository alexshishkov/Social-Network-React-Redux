import React from 'react'
import c from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) =>{
    return(
        <NavLink to={'/dialogs/1' + props.id}>{props.name}</NavLink>
    );
};

const Message = (props) =>{
    return(
        <p>{props.message}</p>
    );
};

const Dialogs = () => {
    return(
        <div className={c.wrapper}>
            <div className={c.dialogs}>
                <ul>
                    <li><Dialog name = 'Oly' id = '1' /></li>
                    <li><Dialog name = 'Mixa' id = '2' /></li>
                    <li><Dialog name = 'Fidel' id = '3' /></li>
                </ul>
            </div>
            <div className={c.messages}>
                <Message message ='Hi'/>
                <Message message ='How are you?'/>
            </div>
        </div>
    );
};

export default Dialogs;