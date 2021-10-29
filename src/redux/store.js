import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import dialogsReducer from "./dialogsReducer";


const store = {
    _state: {
        profilePage: {
            newPostText: 'Hi!',
            postsData: [
                {id: 1, message: 'It is my first post', likesCount: 12},
                {id: 2, message: 'Hi, how are you?', likesCount: 13}
            ],

        },
        dialogsPage: {
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
        },
        sidebar: {

        }
    },

    getState() {
        return this._state
    },
    _callSubscriber()  {
    },
    /*addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },*/
    /*addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },*/
    /*updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    /* updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },*/
    subscribe(observer) {
        this._callSubscriber = observer; //observer  наблюдатель //addEventListener
    },
    dispatch(action) { //action - object { type: 'ADD-POST' }
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    },
}

window.store = store;

export default store;