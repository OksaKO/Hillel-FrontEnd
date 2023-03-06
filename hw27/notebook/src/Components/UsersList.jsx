import {useEffect, useState} from 'react';
import './UsersList.css';
import { Link } from 'react-router-dom';
import Modal from './Modal';

export default function UsersList(items) {
  const [users, setUsers] = useState(items.items);
  const [modalActive, setModalActive] = useState(false);
  const [statusBtn, setStatusBtn] = useState (false)
  let userN;
  let tempArr;
  // Delete user
  const handleDelUser = (event) => {
    userN = event.target.getAttribute('usernum');
    setModalActive(true);
    if (statusBtn === true)  {
      tempArr = users.slice();
      tempArr.splice(userN,1);
      setUsers(tempArr);
    } 
      
  }
  
 // Создание таблицы 
  const result = users.map((elem,index) => {
    return <tr key={index}>
        <td>
          <Link to={`/users/${index}`}  par = {users}>
            {elem.name}
          </Link>
        </td>
        <td>{elem.username}</td>
        <td>{elem.phone}</td>
        <td><div className='delUser' onClick={() => setModalActive(true)} onClick={handleDelUser} usernum ={index}>Delete</div></td>
      </tr>
  })
  return (
    <div className='pageUsers'> 
      {!users.length && <span>Пока нет записей</span>}
      {!!users.length && 
      <table className='usersList'>
        <tbody>
          {result}
        </tbody>        
      </table>
      
      }
    <Modal active = {modalActive} setActive = {setModalActive} status = {statusBtn} setStatus = {setStatusBtn} />  
    </div>
  ) 
  
  
}
