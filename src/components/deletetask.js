import React from "react";


const DeleteTask = ({ index, data, setData }) => {
    const deleteTask = () => {
        const newList = [...data];
        newList.splice(index, 1);
        setData(newList);
    };
  
    return (
        <>
            <i className="fa-solid fa-trash" onClick={deleteTask}></i>
        </>
    );
  };
  
export default DeleteTask;