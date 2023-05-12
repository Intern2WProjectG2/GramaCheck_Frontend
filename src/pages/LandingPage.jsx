import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"

export const LandingPage = () => {
    const history = useHistory();
    return (
        <div className="content" >
            <div className="LandDiv">
                  <button
                className="LandingBtn"
                onClick={() => {
                    history.push("/apply-form");
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#002244";
                    e.target.style.border = "1px solid #002244";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#002244";
                    e.target.style.color = "white";
                  }}
            
            >
                Apply For Grama Cert
            </button>
            <button
                className="LandingBtn"
                onClick={() => {

                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#002244";
                    e.target.style.border = "1px solid #002244";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#002244";
                    e.target.style.color = "white";
                  }}
            >
                Check Status
            </button>
            <button
                className="LandingBtn"
                onClick={() => {
                   
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "#002244";
                    e.target.style.border = "1px solid #002244";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#002244";
                    e.target.style.color = "white";
                  }}
            >
                Help
            </button>
            </div>
          
        </div>

    );
}
