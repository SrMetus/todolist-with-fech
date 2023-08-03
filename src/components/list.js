import React from "react";
import DeleteTask from "./DeleteTask";

const List = ({ data, SetDataInput }) => {
    return (
        <>
            <ul>
                {data.map((task, index) => (
                    <li key={index}>
                        {index + 1}.- {task}
                        <DeleteTask index={index} data={data} setData={SetDataInput} />
                    </li>
                ))}
            </ul>
        </>
    );
};

export default List;