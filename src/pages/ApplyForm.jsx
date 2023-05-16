import React, { useState, useEffect } from "react";
import "./ApplyForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import formpic from '../images/formpic.png';

import { nicValidator, numberValidator, cityValidator, districtValidator, provinceValidator, postalCodeValidator, gramasewaDivValidator } from './inputValidator.js'
import { Header } from "../components/Header.jsx"
import { addApp } from "../services/apiClient";
import { useAuthContext } from "@asgardeo/auth-react";
export const ApplyForm = () => {
  const [nic, setNic] = useState({ value: '', error: '' });
  const [number, setNumber] = useState({ value: '', error: '' });
  const [city, setCity] = useState({ value: '', error: '' });
  const [district, setDistrict] = useState({ value: '', error: '' });
  const [province, setProvince] = useState({ value: '', error: '' });
  const [postalcode, setPostalCode] = useState({ value: '', error: '' });
  const [gramasewaDiv, setGramasewaDiv] = useState({ value: '', error: '' });

  const {
    state,
    signIn,
    getBasicUserInfo,
    getIDToken,
    getDecodedIDToken,
    getAccessToken
  } = useAuthContext();

  const registerHandler = async (e) => {
    e.preventDefault();


    const nicError = nicValidator(nic.value)
    const cityError = cityValidator(city.value)
    const numberError = numberValidator(number.value)
    const districtError = districtValidator(district.value)
    const provinceError = provinceValidator(province.value)
    const postalcodeError = postalCodeValidator(postalcode.value)
    const gramasewaDivError = gramasewaDivValidator(gramasewaDiv.value)



    if (nicError || numberError || cityError || districtError || provinceError || postalcodeError || gramasewaDivError) {
      setNic({ ...nic, error: nicError })
      setNumber({ ...number, error: numberError })
      setCity({ ...city, error: cityError })
      setDistrict({ ...district, error: districtError })
      setProvince({ ...province, error: provinceError })
      setPostalCode({ ...postalcode, error: postalcodeError })
      setGramasewaDiv({ ...gramasewaDiv, error: gramasewaDivError })
      return
    }

    // Send data to backend
    console.log('Adding the application request.');
    try {
      // TODO: change later. This is for testing the API integration
      const result = await addApp({
        "appId": "1242",
        "userId": "f47a",
        "issueDate": "2023-05-15",
        "status": "approved",
        "inputAddress": "WWW Street",
        "inputNIC": "AB123456",
        "certLink": "https://example.com/certificate"
      }, await getAccessToken()
      );
      console.log(result);
    } catch (e) { } ''

  }
  return (

    <div className="container-fuild   ">
      <Header />
      <div class="container-fuild" id="applyFormContainer">
        <div class="row">
          <div class="col-md-7">
            <form id="stripe-login" onSubmit={registerHandler}>
              <div class="mb-3">
                <label style={{ fontWeight: "bold" }} for="exampleInputEmail1" class="form-label">ID</label>
                <input type="text" placeholder="NIC" class="form-control" id="nic"
                  defaultValue={nic.value}
                  onChange={(e) => {
                    setNic({ value: e.target.value, error: '' });
                  }} />
                {nic.error && <p className="errorValidation"> {nic.error} </p>}
              </div>

              <div class="mb-3">
                <label style={{ fontWeight: "bold" }} for="exampleInputEmail1" class="form-label">Address</label>
                <input type="text" placeholder="Number" class="form-control" id="number"
                  defaultValue={number.value}
                  onChange={(e) => {
                    setNumber({ value: e.target.value, error: '' });
                  }} />
                {number.error && <p className="errorValidation"> {number.error} </p>}
              </div>


              <div class="mb-3">
                <input type="text" placeholder="City" class="form-control" id="city"
                  defaultValue={city.value}
                  onChange={(e) => {
                    setCity({ value: e.target.value, error: '' });
                  }} />
                {city.error && <p className="errorValidation"> {city.error} </p>}
              </div>

              <div class="mb-3">
                <input type="text" placeholder="District" class="form-control" id="district"
                  defaultValue={district.value}
                  onChange={(e) => {
                    setDistrict({ value: e.target.value, error: '' });
                  }} />
                {district.error && <p className="errorValidation"> {district.error} </p>}
              </div>


              <div class="mb-3">
                <input type="text" placeholder="Province" class="form-control" id="province"
                  defaultValue={province.value}
                  onChange={(e) => {
                    setProvince({ value: e.target.value, error: '' });
                  }} />
                {province.error && <p className="errorValidation"> {province.error} </p>}
              </div>

              <div class="mb-3">
                <input type="text" placeholder="Postal Code" class="form-control" id="postalcode"
                  defaultValue={postalcode.value}
                  onChange={(e) => {
                    setPostalCode({ value: e.target.value, error: '' });
                  }} />
                {postalcode.error && <p className="errorValidation"> {postalcode.error} </p>}
              </div>

              <div class="mb-3">
                <input type="text" placeholder="Gramasewa Division Number" class="form-control" id="gramasewaDiv"
                  defaultValue={gramasewaDiv.value}
                  onChange={(e) => {
                    setGramasewaDiv({ value: e.target.value, error: '' });
                  }} />
                {gramasewaDiv.error && <p className="errorValidation"> {gramasewaDiv.error} </p>}
              </div>

              <div class="mb-3">
                <button class="btn btn-primary" style={{ backgroundColor: "#0c255b" }}>Submit</button>
              </div>
            </form>
          </div>
          <div class="col-md-5 ">
            <h1 id="colapplyform" style={{ textAlign: "center", fontWeight: "bold" }}><span>Get Your</span> <br />Gramasewa Certificate<br />Now</h1><hr />
            <div class="mt-4">
              <div class="d-flex">
                <div class="col-md-24 p-1 ">
                  <img src={formpic} class="img-fluid" alt="Responsive image" id="imageform" />
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
