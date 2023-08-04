import React from "react";

const Input = ({dataInput, setDataInput}) => {
    const handleKeyDown = (event) => {
        if (event.key === "Enter" &&
            event.target.value.trim() !== "") {
            setDataInput([...dataInput,
            event.target.value.trim()]);
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