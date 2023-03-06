import { useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import './EditPage.css';
export default function EditPage(items) {
  const[users, setUsers] = useState(items.items);
  const params = useParams();
  let id = params.userID
  
  const btnEditUserHandle = (event) => {
    const objUser = {};
    const uName = document.querySelector('.uName');
    const userName = document.querySelector('.userName');
    const phone = document.querySelector('.phone');
      objUser.id = id;
      objUser.name =uName.value;
      objUser.username = userName.value;
      objUser.phone = phone.value;
      users[id] = objUser;   
  }
  
  return (
    <div className='formAdd'>          
          <p>Имя и фамилия: <input type='text' className='uName' defaultValue={users[id].name}></input></p>
          <p>Ник: <input type='text' className='userName' defaultValue={users[id].username}></input></p>
          <p>Телефон: <input type='text' className='phone' defaultValue={users[id].phone}></input></p>
          <Link to ="/users"> <div className='button'>Отмена</div> </Link>
          <Link to ="/users"> <div className='button' onClick={btnEditUserHandle}>Сохранить</div> </Link>
    </div>
  )
}
