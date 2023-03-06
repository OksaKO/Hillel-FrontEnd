import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function() {
  return (
    <ul className='user-list'>
        <li>
            <Link to="/users">Список</Link>
        </li>
        <li>
            <Link to="/add">Добавить</Link>
        </li>
    </ul>
  )
}
