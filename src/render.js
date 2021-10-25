import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";

export const renderEntireTree = (props) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={props}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 addMessage={addMessage}
                 updateNewMessageText={updateNewMessageText}

            />;
        </React.StrictMode>,
        document.getElementById('root')
    );
}