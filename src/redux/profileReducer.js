const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    newPostText: 'Hi!',
    postsData: [
        {id: 1, message: 'It is my first post', likesCount: 12},
        {id: 2, message: 'Hi, how are you?', likesCount: 13}
    ],

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT:
            let stateCopy = {...state};

            stateCopy.newPostText = action.newText;
            return stateCopy;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (newText) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText })


export default profileReducer;