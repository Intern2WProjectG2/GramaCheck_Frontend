import React from "react";
import { useHistory } from "react-router-dom";
import GramaCert from "../images/gramaCerts.jpg";
import CheckStatus from "../images/status.jpg";

export const CardPage = () => {
    const history = useHistory();
    return (
        <>
            <div className="container-fuild d-flex justify-content-center">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="card text-center border-light">
                            <div className="overflow">
                                <img src={GramaCert} alt=""  className="card-img-top"  height="250px" />
                            </div>
                            
                            <div className="card-body text-dark">
                                <button
                                    className="homeBtn"
                                    onClick={() => {
                                        history.push("/apply-form");
                                    }}
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
                                    Apply For Grama Cert
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="card text-center border-light">
                            <div className="overflow">
                                <img src={CheckStatus} alt="" className="card-img-top"  height="250px"/>
                            </div>
                            <div className="card-body text-dark">
                                <button
                                    className="homeBtn"
                                    onClick={() => {
                                        history.push("/status-list");

                                    }}
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
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    );
}
