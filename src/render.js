import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from "./redux/state";

export const renderEntireTree = (props) => {
    console.log(props)
    ReactDOM.render(
        <React.StrictMode>
            <App state={props} addPost={addPost}/>;
        </React.StrictMode>,
        document.getElementById('root')
    );
}