import React from 'react';
import logo from './logo.svg';
import './App.css';
import Displaycontent from './components/Displaycontent'

function App() {
  return (
    <div className="Container">
  
      <div className='Header'>
      <h1 className='home'> Home </h1>
      </div>
      <Displaycontent />
      


      {/* <button>Edit</button>
      <button>Delete</button>
      <button>New</button> */}


    </div>
  );
}

export default App;
