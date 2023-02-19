import { Component } from "react";
import BtnOperation from "./BtnOperation";
import "./Keypad.scss";
import keys from './keys.js'


console.log(keys[0])

export default class Keypad extends Component{
    state = {
        result: 0
    }
    render(){
    const f = (res) => {
        this.setState({result: res})
    };
        return(
            <div className="PanelDiv"> 
                <div className="ResultDiv">
                    {this.state.result}
                </div>              
               {keys.map((elem) => (<BtnOperation key={elem.id} id={elem.id} callback = {f}/>))}      
               
            </div>
            
        )
    }
}
 