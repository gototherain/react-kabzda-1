import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';


let postsData = [
  {id: 1, message: 'Buenos dias!', likesCount: 20},
  {id: 2, message: 'Buenos Aires!', likesCount: 0},
  {id: 3, message: 'Valar Morghulis', likesCount: 10}
];

let dialogsData = [
  { id: 1, name: 'Rick' },
  { id: 2, name: 'Dick' },
  { id: 3, name: 'Sick' },
  { id: 4, name: 'Wick' },
  { id: 5, name: 'Pick' },
  { id: 6, name: 'Nick' }
];

let messagesData = [
  { id: 1, message: 'So lock me up and sock me up, and throw away the key.' },
  { id: 2, message: 'Go fuck yourself, you whoreson,' },
  { id: 3, message: '\'Cause you\'re through fuckin\' with me.' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
