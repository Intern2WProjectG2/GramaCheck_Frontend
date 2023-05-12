import React, { useState } from "react";
import "../App.css";

export const ApplyForm = () => {
    const [number, setNumber] = useState("");
    const [city, setCity] = useState("");
    const [district, setDistrict] = useState("");
    const [province, setProvince] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [gramaDiv, setGramaDiv] = useState("");

    // const [error, setError] = useState(false);
    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleCityChange = (event) => {
        if (/^\d+$/.test(event.target.value)) {
            setCity("");
        } else {
            setCity(event.target.value);
        }
    };

    const handleDistrictChange = (event) => {
        if (/^\d+$/.test(event.target.value)) {
            setDistrict("");
        } else {
            setDistrict(event.target.value);
        }
    };

    const handleProvinceChange = (event) => {
        if (/^\d+$/.test(event.target.value)) {
            setProvince("");
        } else {
            setProvince(event.target.value);
        }
    };

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value);
    };

    const handleGramaDivChange = (event) => {
        setGramaDiv(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // if (id.length==0 ||number.length==0) {
        //     setError(true);
        // }
        const data = new FormData(event.target);
        console.log(Object.fromEntries(data.entries()));
    };

    return (
        <div className="content" style={{display: "flex",justifyContent: "center",  /*background: 'linear-gradient(45deg, rgba(12,37,91,1) 12%, rgba(13,198,203,1) 36%, rgba(255,255,255,1) 59%)' */    }}>
            <div className="ApplyFormDiv">
                <form onSubmit={handleSubmit} className="form">
                    <label className="lbl">
                        <span className="spanTxt">ID</span>
                        <input type="text" name="id" className="inputTxt1" placeholder="NIC" /*onChange={event => setId(event.target.value)}*/ required />
                        {/*{error && <span className="error">Please enter a valid NIC</span>}*/}
                    </label>
                    <label className="lbl">
                        <span className="spanTxt" style={{marginTop:"20px"}}>Address</span>
                        <input type="text" name="number" className="inputTxt2" placeholder="Number" value={number} onChange={handleNumberChange} required />
                        <input type="text" name="city" className="inputTxt2" placeholder="City" value={city} onChange={handleCityChange} required />
                        <input type="text" name="district" className="inputTxt2" placeholder="District" value={district} onChange={handleDistrictChange} required />
                        <input type="text" name="province" className="inputTxt2" placeholder="Province" value={province} onChange={handleProvinceChange} required />
                        <input type="text" name="postalCode" className="inputTxt2" placeholder="Postal Code" value={postalCode} onChange={handlePostalCodeChange} required />
                        <input type="text" name="gramaDiv" className="inputTxt2" placeholder="Gramasewa Division Number" value={gramaDiv} onChange={handleGramaDivChange} required />
                    </label>
                    <button
                        type="submit"
                        className="submitBtn"
                        onClick={() => {
                   
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
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};
