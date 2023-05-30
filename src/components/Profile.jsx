import React from "react";
import profile from "../images/profile.png";
import "../App.css";

export const Profile = ({ inputNIC, inputAddress }) => {

  return (
    <div className="container justify-content-center" style={{ border: "#fff" }}>
      <div className="row border-curve" style={{ border: "1px solid #0c255b" }}>
        <div className="col-lg-5 " style={{ border: "#fff" }}>
          <div className="card text-center" style={{ border: "#fff" }}>
            <div className="card-body justify-content-center" style={{ border: "#fff", alignItems: "center" }}>
              <img src={profile} className="card-img-top" style={{ width: "200px", height: "200px", alignItems: "center" }} alt="Card 1 Image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 left-aligned" style={{ border: "#fff" }}>
          <div className="card " style={{ border: "#fff" }}>
            <div className="card-body ">
              <div className="table-responsive">
                <table className="table table-borderless align-middle">

                  <tbody>
                    <tr>
                      <th scope="row">NIC</th>
                      <td>{inputNIC}</td>
                    </tr>

                    <tr>
                      <th scope="row">ADDRESS</th>
                      <td>{inputAddress}</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


