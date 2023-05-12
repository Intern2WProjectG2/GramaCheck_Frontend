import React, { useState } from "react";
import "../App.css";
import {Formik, Field,Form,ErrorMessage} from "formik";
import * as Yup from "yup";

export const ApplyForm = () => {

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.target);
    //     console.log(Object.fromEntries(data.entries()));
    // };

    return (

        <div className="content" style={{display: "flex",justifyContent: "center",  /*background: 'linear-gradient(45deg, rgba(12,37,91,1) 12%, rgba(13,198,203,1) 36%, rgba(255,255,255,1) 59%)' */    }}>
            <div className="ApplyFormDiv">
                <Formik
                initialValues={{
                    id: "",
                    number: "",
                    city: "",
                    district: "",
                    province: "",
                    postalCode: "",
                    gramaDiv: "",
                }}
                validationSchema={Yup.object({
                    id: Yup.string()
                        .required("* NIC is required")
                        .matches(/^[12][09][0-9]{10}$|^[3-9][0-9]{8}[vV]$/, "Invalid NIC number"),
                    number: Yup.string().required("* House or Building Number is required"),
                    city: Yup.string().required("* City or Town is required").matches(/^[a-zA-Z ]*$/, 'City or Town should not contain numbers'),
                    district: Yup.string().required("* District is required").matches(/^[a-zA-Z ]*$/, 'District should not contain numbers'),
                    province: Yup.string().required("* Province is required").matches(/^[a-zA-Z ]*$/, 'Province should not contain numbers'),
                    postalCode: Yup.string().required("* Postal Code is required"),
                    gramaDiv: Yup.string().required("* Dramasewa Division Number is required"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setSubmitting(false);
                }}
                >
                    <Form /*onSubmit={handleSubmit}*/ className="form">
                        <label className="lbl">
                            <span className="spanTxt">ID</span>
                            <Field type="text" name="id" className="inputTxt1" placeholder="NIC" /*onChange={event => setId(event.target.value)}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="id" />
                        </label>
                        <label className="lbl">
                            <span className="spanTxt" style={{marginTop:"20px"}}>Address</span>
                            <Field type="text" name="number" className="inputTxt2" placeholder="Number" /*value={number} onChange={handleNumberChange}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="number" />
                            <Field type="text" name="city" className="inputTxt2" placeholder="City" /*value={city} onChange={handleCityChange}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="city" />
                            <Field type="text" name="district" className="inputTxt2" placeholder="District" /*value={district} onChange={handleDistrictChange}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="district" />
                            <Field type="text" name="province" className="inputTxt2" placeholder="Province" /*value={province} onChange={handleProvinceChange}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="province" />
                            <Field type="text" name="postalCode" className="inputTxt2" placeholder="Postal Code" /*value={postalCode} onChange={handlePostalCodeChange}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="postalCode" />
                            <Field type="text" name="gramaDiv" className="inputTxt2" placeholder="Gramasewa Division Number" /*value={gramaDiv} onChange={handleGramaDivChange}*/ required />
                            <ErrorMessage component="label" className="errorMsg" name="gramaDiv" />
                        </label>
                        <button
                            type="submit"
                            className="submitBtn"
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

                    </Form>
                </Formik>

            </div>
        </div>
    );
};
