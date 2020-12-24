import React from 'react'
import c from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {createRef} from "react/cjs/react.production.min";
import {sendMessagesActionCreater, updateNewMessagesTextActionCreater} from "../../redux/dialogs-reduser";

const Dialogs = (props) => {

    let DialogsElement = props.state.Dialogs.map((d) => <li><Dialog name = {d.name} id = {d.id} /></li> );

    let MessagesElement = props.state.Messages.map((m) => <Message message ={m.message}/>);

    let NewDialogElement = createRef();

    let AddMessages = () => {
        props.dispatch(sendMessagesActionCreater());
    };

    let onMessagesChange = () => {
        let body = NewDialogElement.current.value;
        props.dispatch(updateNewMessagesTextActionCreater(body))
    };

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
                    <textarea placeholder='Enter your message' ref={NewDialogElement} onChange={onMessagesChange} value={props.state.newMessagesText}/>
                    <button onClick={AddMessages}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;