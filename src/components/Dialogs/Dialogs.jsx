import React from 'react'
import c from './dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let DialogsElement = props.state.Dialogs.map((d) => <li><Dialog name = {d.name} id = {d.id} /></li> );

    let MessagesElement = props.state.Messages.map((m) => <Message message ={m.message}/>);

    return(
        <div className={c.wrapper}>
            <div className={c.dialogs}>
                <ul>
                    {DialogsElement}
                </ul>
            </div>
            <div className={c.messages}>
                {MessagesElement}
            </div>
        </div>
    );
};

export default Dialogs;