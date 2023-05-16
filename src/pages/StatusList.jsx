import React from "react";
import { useHistory } from "react-router-dom";
import {Header} from "../components/Header.jsx";

export const StatusList = () => {
    const history = useHistory();

    const data = [
        { date: "2023 May 04", nic: "923467889v", address: "No 123, Galle Road, Colombo 03" },
        { date: "2023 April 09", nic: "923467889v", address: "No 145, Galle Road, Colombo 03" },
        { date: "2023 January 01", nic: "923467889v" , address: "No 13, Galle Road, Colombo 03"},
    ];

    const handleCheckStatus = (item) => {
        history.push(`/check-status?date=${encodeURIComponent(item.date)}&nic=${encodeURIComponent(item.nic)}&address=${encodeURIComponent(item.address)}`);
    };

    return (
        <>
        <Header />
            <h1 style={{ fontSize:"40px", marginTop:"25px", color:"#282c34"}}>Applications</h1>
            <div style={{ margin: "20px", marginTop:"40px" }}>
                <ul class="list-group">
                    {data.map((item, index) => (
                        <li href="#" class="list-group-item d-flex justify-content-between align-items-center">
                            {item.date}
                            <button
                                type="button"
                                className="btn btn-primary btn-sm"
                                style={{ backgroundColor: "#0c255b", color: "white", border: "1px solid #0c255b" }}
                                onClick={() => handleCheckStatus(item)}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = "white";
                                    e.target.style.color = "#0c255b";
                                    e.target.style.border = "1px solid #0c255b";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = "#0c255b";
                                    e.target.style.color = "white";
                                }}
                            >
                                Check Status
                            </button>
                        </li>

                    ))}


                </ul>
            </div>
        </>
    );
};
