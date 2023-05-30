import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Profile } from "../components/Profile.jsx";
import { DefaultLayout } from "../layouts/Default.jsx";
import { getApplicationStatus } from "../services/policies";

export const CheckStatus = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const inputNIC = params.get("nic");
    const inputAddress = params.get("address");
    const status = params.get("status");

    const renderIcon = (checkStatus) => {
        if (checkStatus) {
            return <FontAwesomeIcon icon={faCheck} className="text-success" />;
        } else {
            return <FontAwesomeIcon icon={faTimes} className="text-danger" />;
        }
    };

    const renderIdentityCheck = () => {
        if (status === "iF" || status === "p") {
            return renderIcon(false);
        } else {
            return renderIcon(true);
        }
    };

    const renderAddressCheck = () => {
        if (status === "iF" || status === "aF" || status === "p") {
            return renderIcon(false);
        } else {
            return renderIcon(true);
        }
    };

    const renderPoliceCheck = () => {
        if (status === "iF" || status === "aF" || status === "pF" || status === "p") {
            return renderIcon(false);
        } else {
            return renderIcon(true);
        }
    };

    return (
        <DefaultLayout>
            <Profile inputNIC={inputNIC} inputAddress={inputAddress} />
            <br />
            <br />
            <div className="table-responsive-sm" style={{ flexGrow: 1 }}>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th style={{ textAlign: "left", paddingLeft: "160px" }}>
                                Check
                            </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ textAlign: "left", paddingLeft: "130px" }}>
                                Identity Check
                            </td>
                            <td>{renderIdentityCheck()}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", paddingLeft: "130px" }}>
                                Address Check
                            </td>
                            <td>{renderAddressCheck()}</td>
                        </tr>
                        <tr>
                            <td style={{ textAlign: "left", paddingLeft: "130px" }}>
                                Police Check
                            </td>
                            <td>{renderPoliceCheck()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </DefaultLayout>
    );
};
