import {useEffect, useState} from 'react';
import './WorkArea.css';
export default function WorkArea(usersList) {
  const [users, setUsers] = useState(usersList.arr);

  const handleDelUser = (event) => {
    const userN = event.target.getAttribute('userNum');
    let tempArr = users.slice();
    tempArr.splice(userN,1)
    setUsers(tempArr);
  }
  const handleBtnSave = (event) => {
   
    const objUser = {};
    const uName = document.querySelector('.uName');
    const userName = document.querySelector('.userName');
    const phone = document.querySelector('.phone');
      objUser.id = users.length;
      objUser.name = uName.value;
      objUser.username = userName.value
      objUser.phone = phone.value
    let tempArr = users;
    tempArr.push(objUser);
    setUsers(tempArr);
    console.log(users);
  }
 // Создание таблицы 
  const result = users.map((elem,index) => {
    return <tr key={index}>
        <td>{elem.name}</td>
        <td>{elem.username}</td>
        <td>{elem.phone}</td>
        <td><div className='delUser' onClick={handleDelUser} userNum ={index}>Delete</div></td>
      </tr>
  })

  return (
    <div className='pageUsers'> 
      <table className='usersList'>
        <tbody>
          {result}
        </tbody>        
      </table>
      <div className='formAdd'>          
          <p>Имя и фамилия: <input type='text' className='uName'></input></p>
          <p>Ник: <input type='text' className='userName' ></input></p>
          <p>Телефон: <input type='text' className='phone' ></input></p>
          <button type='button' onClick={handleBtnSave} className='saveUser'>Сохранить</button>
        </div>
    </div>
    
  )
}
