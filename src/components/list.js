import React from "react";
import DeleteTask from "./deletetask";

const List = ({ data, SetDataInput, delData }) => {
    console.log("data", data);

    return (
        <>
            <ul>
                {data.map((task, index) => (
                    < li key = { index } >
                    { index + 1}.- {task.label}
                        <DeleteTask index={index} data={data} setData={SetDataInput} delData={delData} />
                    </li>
                ))}
            </ul >
        </>
    );
};

export default List;