import './App.css';
import React, { useEffect, useState } from 'react';
import Input from './components/input'
import List from './components/list';


const App = () => {
  const [dataInput, setDataInput] = useState([]);

  const url = "https://playground.4geeks.com/apis/fake/todos/user/Metus";

 useEffect(() => {
   getData();
 }, [])

  const getData = () => {
    fetch(url)
      .then(resp => {
        return resp.json()
      })
      .then(data => {
        console.log(data)
        setDataInput(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const putData = (newArray) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newArray),
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

  const delData = (newList) => {
    fetch(url, {
      method: "PUT",
      body: JSON.stringify(newList),
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

  console.log("dataInput", dataInput);
  
  return (
    <>
      <div className="container">
        <h1>Task List</h1>
        <div className="input">
          <Input dataInput={dataInput} setDataInput={setDataInput} putData={putData} />
        </div>
        <div className="list">
          <List data={dataInput} SetDataInput={setDataInput} delData={delData}/>
        </div>
        <div className="counter">
          <p>{dataInput.length} </p>
        </div>
      </div>
    </>
  );
};


export default App;