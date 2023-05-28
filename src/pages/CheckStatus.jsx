import React from "react";
import { useLocation } from "react-router-dom";
import {Header} from "../components/Header.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'
import {Profile} from "../components/Profile.jsx";

import { DefaultLayout } from "../layouts/Default.jsx";

export const CheckStatus = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const inputNIC = params.get("nic");
  const inputAddress = params.get("address");

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
    <DefaultLayout>
      <Profile inputNIC={inputNIC} inputAddress={inputAddress}/>
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
    </DefaultLayout>
  );
};
