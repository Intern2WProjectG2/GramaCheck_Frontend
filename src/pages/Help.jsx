import React from "react";
import { Header } from "../components/Header.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
export const Help = () => {
    return (
        <>
            <Header />
            <div className="container" style={{ backgroundColor: " #f5f5f5", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", height: "500px" }}>
                <div >
                    <h1 style={{ fontSize: "35px", marginTop: "20px", color: "#282c34", }}>
                        Support
                        <FontAwesomeIcon icon={faMessage} style={{ color: "#0c255b", marginLeft: "10px" }} />
                    </h1>
                </div>

                <form style={{ margin: "90px", marginTop: "50PX" }}>
                    <div class="mb-3">
                        <div class="form-floating">
                            <textarea class="form-control " placeholder="Hey! we're here to help!" id="floatingTextarea2" style={{ height: "200px", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }}></textarea>
                            <label for="floatingTextarea2">Hey! we're here to help!</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary"
                        style={{ backgroundColor: "#0c255b", color: "white", border: "1px solid #0c255b" }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "#0c255b";
                            e.target.style.border = "1px solid #0c255b";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#0c255b";
                            e.target.style.color = "white";
                        }}
                    >Send</button>
                </form>
            </div>




        </>
    );
}