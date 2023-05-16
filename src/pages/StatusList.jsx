import React from "react";
import { useHistory } from "react-router-dom";

export const StatusList = () => {
    const history = useHistory();

    const data = [
        { name: "A list item", status: "Pending" },
        { name: "A second list item", status: "Completed" },
        { name: "A third list item", status: "In Progress" },
    ];

    return (
        <>
            <h1>status list</h1>
            <div style={{ margin: "10px" }}>
                <ul class="list-group">
                    {data.map((item,index) =>(
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                       {item.name}
                        <button type="button" class="btn btn-primary btn-sm"
                            onClick={() => {
                                history.push("/check-status");
                            }}
                        >Check Status</button>
                    </li>

                    ))}
                    
                    
                </ul>
            </div>
        </>
    );
};
