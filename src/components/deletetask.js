import React from "react";


const DeleteTask = ({ index, data, setData, delData }) => {
    const deleteTask = () => {
        const newList = [...data];
        newList.splice(index, 1);
        setData(newList);
        delData(newList);
    };
    console.log(data)
    return (
        <>
            <i className="fa-solid fa-trash" onClick={deleteTask}></i>
        </>
    );
  };
  
export default DeleteTask;