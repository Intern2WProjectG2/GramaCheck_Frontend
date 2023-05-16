import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "./Header.jsx";

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
                                onClick={() => handleCheckStatus(item)}
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
