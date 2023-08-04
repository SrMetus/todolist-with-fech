import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/input'
import List from './components/list';


const App = () => {
  const [dataInput, setDataInput] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/Metus")
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        setDataInput(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const putData = () => {
    fetch("https://playground.4geeks.com/apis/fake/todos/user/Metus", {
      method: "PUT",
      body: JSON.stringify(dataInput),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  putData()

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