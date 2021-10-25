import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    const messagesElements = props.messages.map(message => <Message message={message.message}/>);

    const newMessageElement = React.createRef();

    const sendMessage = () => {
       props.addMessage();
    }

    const updateNewMessageText = () => {
        let messageText = newMessageElement.current.value;
        props.updateNewMessageText(messageText)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={classes.messages}>
               { messagesElements }
                <textarea onChange={updateNewMessageText} ref={newMessageElement} value={props.newMessageText}/>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
}

export default Dialogs;