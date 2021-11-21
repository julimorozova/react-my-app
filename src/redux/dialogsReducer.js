const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const initialState = {
    dialogsData: [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Anna'},
        {id: 3, name: 'Frol'}
    ],
    newMessageText: '',
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'I am fine'}
    ]
}

export const dialogsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    };

    switch (action.type) {

        case ADD_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText
            }

            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;


        case UPDATE_NEW_MESSAGE_TEXT:
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE })
export const updateNewMessageTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_MESSAGE_TEXT, newText })

export default dialogsReducer;