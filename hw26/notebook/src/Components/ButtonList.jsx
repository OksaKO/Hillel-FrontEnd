import React from 'react'
import './Button.css'

export default function ButtonList() {
  const handleShowList = () => {
    console.log('Show');
    const usersList = document.querySelector('.usersList');
    usersList.style.display = 'block';
    const formAdd = document.querySelector('.formAdd');
    formAdd.style.display = 'none';   
  }
  return (
    <button type='button' className='button' onClick={handleShowList}>Список</button>
  )
}
