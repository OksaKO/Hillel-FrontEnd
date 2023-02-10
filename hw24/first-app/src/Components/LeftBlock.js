import {Component} from 'react';
import './LeftBlock.css';

class LeftBlock extends Component {
  

 render(){
      return(
          <div className='Left'>
            Виды графики:
            <ul>
                <li> Растровая графика </li>
                <li> Векторная графика </li>
                <li> Фрактальная графика </li>
                <li> Трёхмерная графика </li>
            </ul>

          </div>
      )
  }
}
export default LeftBlock;