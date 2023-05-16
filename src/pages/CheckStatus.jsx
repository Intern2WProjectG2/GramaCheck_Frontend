import React from "react";
import { useLocation } from "react-router-dom";
import {Header} from "../components/Header.jsx";
import PROFILE from "../images/profile.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

export const CheckStatus = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const nic = params.get("nic");
  const address = params.get("address");

  const data = [
    { check: "Form Submitted", status: true },
    { check: "Identity Check", status: true },
    { check: "Address Check", status: false },
    { check: "Police Check", status: true },
    { check: "Granted Grama Sewa Certificate", status: true },
  ];
  // Logic to determine the overall status
  let overallStatus = true;

  if (!data[0].status) {
    overallStatus = false;
  } else if (data[0].status && !data[1].status) {
    overallStatus = false;
  } else if (data[0].status && data[1].status && !data[2].status) {
    overallStatus = false;
  }

  // Update the status in the data array
  data.forEach((item) => {
    item.status = overallStatus;
  });

  return (
    <>
    <Header />
      <h1 style={{ fontSize:"40px", marginTop:"25px", color:"#282c34"}}>Status</h1>
      <div style={{marginLeft:"50px"}}>        
      <img src={PROFILE} class="rounded float-start" style={{width:"150px", height:"150px"}} alt="..."/>
      </div>
      <p>Provided NIC: {nic}</p>
      <p>Provided Address: {address}</p>
      <br />
      <br />
      <div class="table-responsive-sm">
      <table class="table">
      <thead class="table-dark">
        <tr>
          <th style={{ textAlign: "left",paddingLeft:"160px" }}>Check</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td style={{ textAlign: "left",paddingLeft:"130px" }}>{item.check}</td>
            <td>
              {item.status ? (
                <FontAwesomeIcon icon={faCheck} className="text-success" />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="text-danger" />
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};
