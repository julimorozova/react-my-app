import {renderEntireTree} from "../render";

let state = {
    profilePage: {
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
        messagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'I am fine'}
        ]
    },
    sidebar: {

    }

}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.postsData.push(newPost);
    renderEntireTree(state);
}
export default state;