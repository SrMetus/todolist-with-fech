import './App.css';
import React, { useState } from 'react';
import Input from './components/Input'
import List from './components/List';

 /* 
├──App
│  ├──Input
│  └──List
└     └──Delete
*/


const App = () => {
  const [dataInput, setDataInput] = useState([]);

  return (
    <div className="container">
      <h1>Task List</h1>
      <div className="input">
        <Input dataInput={dataInput} setDataInput={setDataInput} />
      </div>
      <div className="list">
        <List data={dataInput} SetDataInput={setDataInput} />
      </div>
      <div className="counter">
        <p>{dataInput.length} </p>
      </div>
    </div>
  );
};


export default App;