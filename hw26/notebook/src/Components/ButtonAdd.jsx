import React from 'react'
import './Button.css'

export default function ButtonAdd() {
  const handleAddUser = () => {
    console.log('Add');
    const usersList = document.querySelector('.usersList');
    usersList.style.display = 'none';
    const formAdd = document.querySelector('.formAdd');
    formAdd.style.display = 'block';
    const uName = document.querySelector('.uName');
    uName.value = '';
    const userName = document.querySelector('.userName');
    userName.value = '';
    const phone = document.querySelector('.phone');
    phone.value = '';
  }
  return (
    <button type='button' className='button' onClick={handleAddUser}>Добавить</button>
  )
}
