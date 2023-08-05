import React from "react";

const Input = ({ dataInput, setDataInput, putData }) => {
    const handleKeyDown = (event) => {
        if (event.key === "Enter" &&
            event.target.value.trim() !== "") {
            const newTask = {
                label: event.target.value.trim(),
                done: false
            };
            const newArray = [...dataInput, newTask]
            setDataInput(newArray);
            putData(newArray);
            event.target.value = "";
        }
    };

    /*const deleteTask = (index) => {
        const filteredTask = dataInput.filter((task, i) => i !== index)
        setDataInput(filteredTask)
    } */

    /* const deleteTask = (index) => {
         const newList = [...dataInput]
         newList.splice(index, 1)
         setDataInput(newList);
     }*/

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
            </div>
        </>

    );
};

export default Input;