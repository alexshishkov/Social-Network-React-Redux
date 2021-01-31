import React from 'react'
import {sendMessagesActionCreater, updateNewMessagesTextActionCreater} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newMessagesText: state.dialog.newMessagesText,
        state: state
    }
};

const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessagesBody: (body) =>{
            dispatch(updateNewMessagesTextActionCreater(body))
        },
        sendMessages: () =>{
            dispatch(sendMessagesActionCreater())
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;