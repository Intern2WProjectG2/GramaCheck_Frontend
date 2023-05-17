import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { useAuthContext } from "@asgardeo/auth-react";
import { getAllApps } from "../services/apiClient";

export const StatusList = () => {
    const history = useHistory();
    const [apps, setApps] = useState([]);

    const {
        getAccessToken
      } = useAuthContext();

    const data = [
        { date: "2023 May 04", nic: "923467889v", address: "No 123, Galle Road, Colombo 03" },
        { date: "2023 April 09", nic: "923467889v", address: "No 145, Galle Road, Colombo 03" },
        { date: "2023 January 01", nic: "923467889v", address: "No 13, Galle Road, Colombo 03" },
    ];

    const getApps = async () => {
        try {
            const allApps = await getAllApps(await getAccessToken());
            setApps(allApps.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckStatus = (item) => {
        history.push(`/check-status?date=${encodeURIComponent(item.issueDate)}&nic=${encodeURIComponent(item.inputNIC)}&address=${encodeURIComponent(item.inputAddress)}`);
    };

    useEffect(() => {
        getApps();
    }, []);

    useEffect(() => {
        console.log(apps);
    }, [apps]);

    return (
        <>
            <Header />
            <h1 style={{ fontSize: "40px", marginTop: "25px", color: "#282c34" }}>Applications</h1>
            {apps && <div style={{ margin: "20px", marginTop: "40px" }}>
                <ul className="list-group">
                    {apps.map((item, index) => (
                        <li href="#" className="list-group-item d-flex justify-content-between align-items-center">
                            {item.issueDate}
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
            </div>}
        </>
    );
};
