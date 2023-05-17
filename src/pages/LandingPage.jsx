import { useAuthContext } from "@asgardeo/auth-react";
import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../layouts/Default.jsx";

import { HomePage } from "./HomePage.jsx";
import Footer from "../components/Footer.jsx";
import LANDING from '../images/landing.png';
import LOGO from '../images/logo.png';

/**
 * Home page
 */
export const LandingPage = () => {

    const {
        state,
        signIn,
        getBasicUserInfo,
        getIDToken,
        getDecodedIDToken,
    } = useAuthContext();

    const [derivedAuthenticationState, setDerivedAuthenticationState] = useState();
    const [hasAuthenticationErrors, setHasAuthenticationErrors] = useState(false);
    const [hasLogoutFailureError, setHasLogoutFailureError] = useState();

    const getUser = async () => {
        const basicUserInfo = await getBasicUserInfo();
        const idToken = await getIDToken();
        const decodedIDToken = await getDecodedIDToken();

        console.log("basicUserInfo", basicUserInfo);

        const derivedState = {
            authenticateResponse: basicUserInfo,
            idToken: idToken.split("."),
            decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
            decodedIDTokenPayload: decodedIDToken
        };

        setDerivedAuthenticationState(derivedState);

        // Set auth state to local storage
        localStorage.setItem("authState", JSON.stringify(derivedState));
    }

    useEffect(() => {

        if (!state?.isAuthenticated) {
            return;
        }

        getUser();
    }, [state.isAuthenticated]);

    const handleLogin = () => {
        setHasLogoutFailureError(false);
        signIn()
            .catch(() => setHasAuthenticationErrors(true));
    };

    return (
        <>
            {
                state.isAuthenticated
                    ? (
                        <DefaultLayout
                            isLoading={state.isLoading}
                            hasErrors={hasAuthenticationErrors}
                            hasLogoutFailureError={hasLogoutFailureError}
                            setHasLogoutFailureError={setHasLogoutFailureError}
                        >
                            <HomePage />
                        </DefaultLayout>
                    )
                    : (
                        <div className="landing">
                            <div className='section image'>
                                <img src={LOGO} className="logo" />
                                <img src={LANDING} className="picture" />
                            </div>

                            <div className='section continue'>
                                <h1>THE PERFECT <br />DIGITAL EXPERIENCE</h1>
                                <p>
                                    An automated system to obtain your Grama Certificates&nbsp;
                                </p>
                                <button
                                    className="btn primary"
                                    onClick={() => {
                                        handleLogin();
                                    }}
                                >
                                    Get Started
                                </button>
                                <p style={{ position: "absolute", bottom: 0 }}>&copy; GramaInc {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    )
            }
        </>
    );
};
