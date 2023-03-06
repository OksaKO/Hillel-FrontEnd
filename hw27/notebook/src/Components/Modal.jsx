import React from 'react'
import './Modal.css'

  
export default function Modal({active, setActive, status, setStatus}) {
  
  return (
    <div className={active ? "modal active" :"modal" } onClick={() => setActive(false)}>
        <div className='modal__content' onClick={ e => e.stopPropagation}>
            <p>Вы действительно хотите удалить данные?</p>
            <input type="button" value={'ДА'} className = "button" onClick={() => setActive(false)} onClick={() => setStatus(true)}/>
            <input type="button" value={'НЕТ'} className = "button" onClick={() => setActive(false)} onClick={() => setStatus(false)}/>
        </div>
    </div>
  )
}
