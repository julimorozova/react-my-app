const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    addMessage() {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messagesData.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    /*updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },*/
    updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer; //observer  наблюдатель //addEventListener
    },
    dispatch(action) { //action - object { type: 'ADD-POST' }
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

    },
}


export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText })


window.store = store;

export default store;