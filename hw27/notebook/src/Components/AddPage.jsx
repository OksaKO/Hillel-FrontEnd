import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';

export default function AddPage(items) {
  const[users, setUsers] = useState(items.items);
  const handleBtnSave = (event) => {
    const objUser = {};
    const uName = document.querySelector('.uName');
    const userName = document.querySelector('.userName');
    const phone = document.querySelector('.phone');
    objUser.id = users.length;
    objUser.name = uName.value;
    objUser.username = userName.value
    objUser.phone = phone.value
    users.push(objUser);
    // setUsers([...users, users]);
    console.log(users)
  }
  
  return (
    <div className='formAdd'>          
    <p>Имя и фамилия: <input type='text' className='uName'></input></p>
    <p>Ник: <input type='text' className='userName' ></input></p>
    <p>Телефон: <input type='text' className='phone' ></input></p>
    <Link to ="/users"> <div className='button'>Отмена</div> </Link>
    <Link to ="/users"> <div className='button' onClick={handleBtnSave}>Сохранить</div> </Link>    
  </div>
  )
}
