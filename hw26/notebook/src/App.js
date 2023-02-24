import './App.css';
import React, {useState} from 'react';
import ButtonAdd from './Components/ButtonAdd';
import ButtonList from './Components/ButtonList';
import WorkArea from './Components/WorkArea';


export default function App(users) {
    const [usersList, setUserList] = useState(users.arr);
  return (
    <div className="App">    
      <div className='menu'>
        <ButtonList />
        <ButtonAdd />
      </div>
      <WorkArea arr = {usersList} />
    </div>
  );
}


