import React from "react";
import { useHistory } from "react-router-dom";
import "../App.css"

export const HomePage = () => {
    const history = useHistory();
    return (
        <div className="content" >
            <div className="homeDiv">
                  <button
                className="homeBtn"
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
                className="homeBtn"
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
                className="homeBtn"
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
