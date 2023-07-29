import React, { useState } from "react";


const Input = () => {
    const [inputValue, setInputValue] = useState([]);

    const handleKeyDown = (event) => {
        if (event.key === "Enter" &&
            event.target.value.trim() !== "") {
            setInputValue([...inputValue,
            event.target.value.trim()]);
            event.target.value = "";
        }
    };

    /*const deleteTask = (index) => {
        const filteredTask = inputValue.filter((task, i) => i !== index)
        setInputValue(filteredTask)
    } */

    const deleteTask = (index) => {
        const newList = [...inputValue]
        newList.splice(index, 1)
        setInputValue(newList);
    }

    console.log(inputValue);
    return (
        <>

            <div>
                <input
                    type="text"
                    name="task"
                    placeholder="task to be performed"
                    onKeyDown={handleKeyDown}
                //onChange={handleChange}
                />

                <ul>
                    {inputValue.map((task, index) => (
                        <li key={index}>{index + 1}-{task} <i class="fa-solid fa-trash" onClick={() => deleteTask(index)}></i></li>
                    ))}

                </ul>
            </div>
            <div className="counter">
                <p>{inputValue.length} item left</p>
            </div>
        </>

    );
};

export default Input;

