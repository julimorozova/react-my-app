import {renderEntireTree} from "../render";

let state = {
    profilePage: {
        newPostText: 'Hi!',
        postsData: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It is my first post', likesCount: 13}
        ],

    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Anna'},
            {id: 3, name: 'Frol'}
        ],
        newMessageText: 'Hi!',
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine'}
        ]
    },
    sidebar: {

    }

}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 4,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
}

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
}
export default state;