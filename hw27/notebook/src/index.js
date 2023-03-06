import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import axios from 'axios';

let users = [];
function queryInfo(link){
 axios.get(link)
    .then((result) => {
        users = result.data;
        // console.log(users);
        })
    .then((result) => {
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App arr = {users}/>);
       
        })
}
queryInfo('https://jsonplaceholder.typicode.com/users');




