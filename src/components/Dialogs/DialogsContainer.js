
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator}
    from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    const state = props.store.getState();

    const sendMessage = () => {
       props.store.dispatch(addMessageActionCreator());
    }

    const updateNewMessageText = (messageText) => {
        props.store.dispatch(updateNewMessageTextActionCreator(messageText))
    }
    return (
       <Dialogs sendMessage={sendMessage}
                updateNewMessageText={updateNewMessageText}
                dialogs={state.dialogsPage.dialogsData}
                messages={state.dialogsPage.messagesData}
                newMessageText={state.dialogsPage.newMessageText}
       />
    )
}

export default DialogsContainer;