const store = {
    _state: {
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
    },

    getState() {
        return this._state
    },
    _callSubsctiber()  {
    },
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubsctiber(this._state);
    },
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubsctiber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubsctiber(this._state);
    },
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubsctiber(this._state);
    },
    subscribe(observer) {
        this._callSubsctiber = observer; //observer  наблюдатель //addEventListener
    },
}


window.store = store;

export default store;