import { Component } from 'react';
import './App.scss';
import Keypad from './Components/Keypad';

export default class App extends Component {
  render(){

    return(
      <div className="App">
        <Keypad />
    </div>

    );
  }
};
