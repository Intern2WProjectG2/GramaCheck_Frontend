import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ApplyForm.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import formpic from '../images/formpic.png';

import { nicValidator, numberValidator, cityValidator, districtValidator, provinceValidator, postalCodeValidator, gramasewaDivValidator } from './inputValidator.js'
import { Header } from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useAuthContext } from "@asgardeo/auth-react";
import { checkPolicies } from "../services/policies";
import { getLastUserApp } from "../services/apiClient";
import { DefaultLayout } from "../layouts/Default.jsx";
import DialogBox from "../components/DialogBox.jsx";
import Loading from "../components/Loading.jsx";

export const ApplyForm = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState('');
  const [route, setRoute] = useState('/');

  const [nic, setNic] = useState({ value: '', error: '' });
  const [number, setNumber] = useState({ value: '', error: '' });
  const [city, setCity] = useState({ value: '', error: '' });
  const [district, setDistrict] = useState({ value: '', error: '' });
  const [province, setProvince] = useState({ value: '', error: '' });
  const [postalcode, setPostalCode] = useState({ value: '', error: '' });
  const [gramasewaDiv, setGramasewaDiv] = useState({ value: '', error: '' });

  const {
    state,
    getAccessToken
  } = useAuthContext();

  const registerHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

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
      setIsLoading(false);
      return
    }

    try {
      // Do the policies check.
      const policyOutput = await checkPolicies(
        {
          nic: nic.value,
          number: number.value,
          city: city.value,
          district: district.value,
          province: province.value,
          postalcode: postalcode.value,
          gramasewaDiv: gramasewaDiv.value
        }, await getAccessToken(), setOpen, setIsLoading, setAlert
      );
      console.log(`The policy output is: ${policyOutput}`);
    } catch (e) {
      console.log(e);
    }
  }

  const getLastApp = async () => {
    try {
      const userApp = await getLastUserApp(state.sub, await getAccessToken());
      if (userApp.data.length > 0) {
        userApp.data[0].status === "a" &&
          getMonthDifference(userApp.data[0].issueDate);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getMonthDifference = (lastAppDate) => {
    const currentDate = new Date();
    const [targetYear, targetMonth] = lastAppDate.split('-').map(Number);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    const monthDifference = (currentYear - targetYear) * 12 + (currentMonth - targetMonth);

    if (monthDifference < 6) {
      setOpen(true);
      setAlert("You already have an approved application within the last 6 months. Press continue to check status.");
      setRoute('/status-list');
    }
  }

  useEffect(() => {
    getLastApp();
  }, []);

  return (
    <>
      <Header />
      <div className="container-fuild">
        <div className="container-fuild" id="applyFormContainer">
          <div className="row">
            <div className="col-md-7">
              <form id="stripe-login" onSubmit={registerHandler}>
                <div className="mb-3">
                  <label style={{ fontWeight: "bold" }} htmlFor="exampleInputEmail1" className="form-label">ID</label>
                  <input type="text" placeholder="NIC" className="form-control" id="nic"
                    defaultValue={nic.value}
                    onChange={(e) => {
                      setNic({ value: e.target.value, error: '' });
                    }} />
                  {nic.error && <p className="errorValidation"> {nic.error} </p>}
                </div>

                <div className="mb-3">
                  <label style={{ fontWeight: "bold" }} htmlFor="exampleInputEmail1" className="form-label">Address</label>
                  <input type="text" placeholder="Number" className="form-control" id="number"
                    defaultValue={number.value}
                    onChange={(e) => {
                      setNumber({ value: e.target.value, error: '' });
                    }} />
                  {number.error && <p className="errorValidation"> {number.error} </p>}
                </div>


                <div className="mb-3">
                  <input type="text" placeholder="City" className="form-control" id="city"
                    defaultValue={city.value}
                    onChange={(e) => {
                      setCity({ value: e.target.value, error: '' });
                    }} />
                  {city.error && <p className="errorValidation"> {city.error} </p>}
                </div>

                <div className="mb-3">
                  <input type="text" placeholder="District" className="form-control" id="district"
                    defaultValue={district.value}
                    onChange={(e) => {
                      setDistrict({ value: e.target.value, error: '' });
                    }} />
                  {district.error && <p className="errorValidation"> {district.error} </p>}
                </div>


                <div className="mb-3">
                  <input type="text" placeholder="Province" className="form-control" id="province"
                    defaultValue={province.value}
                    onChange={(e) => {
                      setProvince({ value: e.target.value, error: '' });
                    }} />
                  {province.error && <p className="errorValidation"> {province.error} </p>}
                </div>

                <div className="mb-3">
                  <input type="text" placeholder="Postal Code" className="form-control" id="postalcode"
                    defaultValue={postalcode.value}
                    onChange={(e) => {
                      setPostalCode({ value: e.target.value, error: '' });
                    }} />
                  {postalcode.error && <p className="errorValidation"> {postalcode.error} </p>}
                </div>

                <div className="mb-3">
                  <input type="text" placeholder="Gramasewa Division Number" className="form-control" id="gramasewaDiv"
                    defaultValue={gramasewaDiv.value}
                    onChange={(e) => {
                      setGramasewaDiv({ value: e.target.value, error: '' });
                    }} />
                  {gramasewaDiv.error && <p className="errorValidation"> {gramasewaDiv.error} </p>}
                </div>

                <div className="mb-3">
                  <button
                    className="btn btn-primary"
                    style={{ backgroundColor: "#0c255b" }}
                  >Submit</button>
                </div>
              </form>
            </div>
            <div className="col-md-5 ">
              <h1 id="colapplyform" style={{ textAlign: "center", fontWeight: "bold" }}><span>Get Your</span> <br />Gramasewa Certificate<br />Now</h1><hr />
              <div className="mt-4">
                <div className="d-flex">
                  <div className="col-md-24 p-1 ">
                    <img src={formpic} className="img-fluid" alt="Responsive image" id="imageform" />
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>

      {open && <DialogBox
        setOpen={setOpen}
        alert={alert}
        handleContinue={() => history.push(route)}
      />}

      {isLoading && <Loading
        alert="Please wait. The application is being processed."
      />}
    </>
  )
}
