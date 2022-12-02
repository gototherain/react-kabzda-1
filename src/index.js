import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={state} updateNewPostText={store.updateNewPostText.bind(store)} addPost={store.addPost.bind(store)}  updatenewMessageText={store.updatenewMessageText.bind(store)} addMessage={store.addMessage.bind(store)} />
    </BrowserRouter>
  </React.StrictMode>
);

}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
