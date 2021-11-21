import {addMessageActionCreator, updateNewMessageTextActionCreator}
    from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*
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
*/

const mapStateToProps = (state) =>{
    return {
        newMessageText: state.dialogsPage.newMessageText,
        dialogs: state.dialogsPage.dialogsData,
        messages: state.dialogsPage.messagesData
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        updateNewMessageText: (messageText) => {
            dispatch(updateNewMessageTextActionCreator(messageText))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;