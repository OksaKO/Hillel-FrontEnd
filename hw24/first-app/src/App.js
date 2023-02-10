import './App.css';
import Header from './Components/Header.js';
import LeftBlock from './Components/LeftBlock.js'
import ContentBlock from './Components/ContentBlock'
import Footer from './Components/Footer.js'



function App() {

  return (
    <div className="App">
      <Header/>
      <div className='mainBlock'>
        <LeftBlock/>
        <ContentBlock/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
