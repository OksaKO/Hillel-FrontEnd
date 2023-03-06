import './App.css';
import React, {useState, useEffect} from 'react';
import ButtonAdd from './Components/ButtonAdd';
import ButtonList from './Components/ButtonList';
import UsersList from './Components/UsersList';
import ErrorPage from './Components/ErrorPage'
import Menu from './Components/Menu';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AddPage from './Components/AddPage';
import EditPage from './Components/EditPage';

export default function App(param) {
  const [users, setUsers] = useState(param.arr);
  
    
  return (
    <div className="App">    
    {/* //   <div className='menu'>
    //     <ButtonList />
    //     <ButtonAdd />
    //   </div>
      */}
      <BrowserRouter>
        <Menu className='menu'/>
        <Routes>
         <Route path="/" element={<UsersList items={users}/>} />
         <Route path="/users" element={<UsersList items={users}/>} />
         <Route path="/add" element={<AddPage items={users}/>} />
         <Route path="/users/:userID" element={<EditPage items={users}/>} />
         <Route path="*" element={<ErrorPage />} /> 
       </Routes>
     </BrowserRouter>

    </div>
  );
}


