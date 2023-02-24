import React from 'react'
import './Button.css'

export default function ButtonAdd() {
  const handleAddUser = () => {
    console.log('Add');
    const usersList = document.querySelector('.usersList');
    usersList.style.display = 'none';
    const formAdd = document.querySelector('.formAdd');
    formAdd.style.display = 'block';

  }
  return (
    <button type='button' className='button' onClick={handleAddUser}>Добавить</button>
  )
}
