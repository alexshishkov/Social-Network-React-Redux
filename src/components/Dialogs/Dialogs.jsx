import React from 'react'
import c from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {createRef} from "react/cjs/react.production.min";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let DialogsElement = props.state.dialog.Dialogs.map((d) => <li><Dialog name = {d.name} key = {d.id} id = {d.id} /></li> );

    let MessagesElement = props.state.dialog.Messages.map((m) => <Message message ={m.message}/>);

    let NewDialogElement = createRef();

    let AddMessages = () => {
        props.sendMessages()
    };

    let onMessagesChange = () => {
        let body = NewDialogElement.current.value;
        props.updateNewMessagesBody(body);
    };

    if (!props.isAuth) return <Redirect to = '/login'/>;

    return(
        <div className={c.wrapper}>
            <div className={c.dialogs}>
                <ul>
                    {DialogsElement}
                </ul>
            </div>
            <div className={c.messages}>
                {MessagesElement}
                <div className={c.text}>
                    <textarea placeholder='Enter your message' ref={NewDialogElement} onChange={onMessagesChange} value={props.newMessagesText}/>
                    <button onClick={AddMessages}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;