import React from 'react'
import {sendMessagesActionCreater, updateNewMessagesTextActionCreater} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";

const mapStateToProps = (state) => {
    return {
        newMessagesText: state.dialog.newMessagesText,
        state: state,
        isAuth: state.auth.isAuth
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

let authRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(authRedirectComponent);

export default DialogsContainer;