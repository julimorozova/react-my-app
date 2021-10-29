import './index.css';
import reportWebVitals from './reportWebVitals';
import store  from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const renderEntireTree = (state) => {
    console.log(store)
    ReactDOM.render(
        <React.StrictMode>
            <App /*state={state}
                 dispatch={store.dispatch.bind(store)}*/
                store={store}
            />;
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(store.getState());

store.subscribe(() => {
    renderEntireTree(store.getState())
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
