import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.messages.map(message => <Message message={message.message}/>);

    const newMessageElement = React.createRef();

    const sendMessage = () => {
       props.dispatch(addMessageActionCreator());
    }

    const updateNewMessageText = () => {
        let messageText = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(messageText))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={classes.messages}>
               { messagesElements }
                <textarea onChange={updateNewMessageText}
                          ref={newMessageElement}
                          placeholder='Enter your message...'
                          value={props.newMessageText}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;