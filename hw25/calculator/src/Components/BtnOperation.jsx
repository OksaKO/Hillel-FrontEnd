import React, { Component } from 'react';
import './BtnOperation.scss';
import keys from './keys.js'
let res = 0; let operand1 = false; let operand2 = false; let operation = "";
let num1 = 0; let num2 = 0; let x;

export default class BtnOperation extends Component {
   state = {
    result:0
   }
   handleClick = (i) => {
    x = keys[i].nameOperation;
    switch(x){
      case '0':
      case '1':
      case'2':
      case'3':
      case'4':
      case'5':
      case'6':
      case'7':
      case'8':
      case'9': 
        if (!operand1){      
          num1 = num1*10+Number(x);
          console.log ('num1: ',num1);
          this.setState({ result: num1 });
          res = num1;        
        }
        else if (!operand2){
          num2 =num2*10+Number(x);
          console.log ('num2: ',num2);
          this.setState({ result: num2})
          res = num2;  
        }
        break;
      case 'SQRT':
        res = Math.sqrt(num1);
        console.log('res = ',res);
        this.setState({ result: res })
          
        num1 = 0;
        break;
      case 'POW':
        res = Math.pow(num1,2);
        console.log('res = ',res);
        this.setState({ result: res })
          
        num1 = 0;
        break;   
      case '%':
        res = res/100;
        console.log('res = ',res);
        this.setState({ result: res })
         
        num1 = 0;
        num2 = 0;
        break;    
      case '/':
      case '*':
      case '+':
      case '-':
        operand1 = true; 
        operation = x;
        res = x;
        break; 
      case '=':
        if (operation==="/"){res = num1/num2}
        else if  (operation==="*"){res = num1*num2} 
          else if  (operation==="+"){res = num1+num2} 
            else if  (operation==="-"){res = num1-num2} 
        console.log('res = ',res);
        this.setState({ result: res })
          
        operand1 = false; 
        operand2 = false; 
        operation = "";
        num1 = 0; 
        num2 = 0;
        break;
      case 'C':
        operand1 = false; 
        operand2 = false; 
        operation = "";
        num1 = 0; 
        num2 = 0;
        this.setState({ result: 0 })
          
      break;
      case '+/-':
        if(operand1){
          num2 = -num2;
          this.setState({ result: num2 })
          res = num2;   
        } else {
          num1 = -num1;
          this.setState({ result: num1 })
          res = num1; 
        }
      break;
    }
    this.props.callback(res);
   
  }
  render() {
    return (
      <div className='BtnOperation' onClick = {() => this.handleClick(this.props.id)} >
        {keys[this.props.id].nameOperation}
      </div>
    );
  }
}
