import React from 'react'
import {sendMessagesActionCreater, updateNewMessagesTextActionCreater} from "../../redux/dialogs-reduser";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);