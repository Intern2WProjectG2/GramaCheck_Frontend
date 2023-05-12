import { Hooks, useAuthContext } from "@asgardeo/auth-react";
import React, { useState, useEffect } from "react";
import { DefaultLayout } from "../layouts/Default.jsx";
import { useLocation } from "react-router-dom";
import { LogoutRequestDenied } from "../components/LogoutRequestDenied.jsx";
import { LandingPage } from "./LandingPage.jsx";

/**
 * Home page
 */
export const HomePage = () => {

    const {
        state,
        signIn,
        signOut,
        getBasicUserInfo,
        getIDToken,
        getDecodedIDToken,
    } = useAuthContext();

    const [ derivedAuthenticationState, setDerivedAuthenticationState ] = useState();
    const [ hasAuthenticationErrors, setHasAuthenticationErrors ] = useState(false);
    const [ hasLogoutFailureError, setHasLogoutFailureError ] = useState();

    const search = useLocation().search;
    const stateParam = new URLSearchParams(search).get('state');
    const errorDescParam = new URLSearchParams(search).get('error_description');

    const getUser = async () => {
        const basicUserInfo = await getBasicUserInfo();
        const idToken = await getIDToken();
        const decodedIDToken = await getDecodedIDToken();

        const derivedState = {
            authenticateResponse: basicUserInfo,
            idToken: idToken.split("."),
            decodedIdTokenHeader: JSON.parse(atob(idToken.split(".")[0])),
            decodedIDTokenPayload: decodedIDToken
        };
    
        setDerivedAuthenticationState(derivedState);
    }

    useEffect(() => {

        if (!state?.isAuthenticated) {
            return;
        }

        getUser();
    }, [ state.isAuthenticated ]);

    useEffect(() => {
        if(stateParam && errorDescParam) {
            if(errorDescParam === "End User denied the logout request") {
                setHasLogoutFailureError(true);
            }
        }
    }, [stateParam, errorDescParam]);

    const handleLogin = () => {
        setHasLogoutFailureError(false);
        signIn()
            .catch(() => setHasAuthenticationErrors(true));
    };

    const handleLogout = () => {
        signOut();
    };

    if (hasLogoutFailureError) {
        return (
            <LogoutRequestDenied
                errorMessage="End User denied the logout request"
                handleLogin={handleLogin}
                handleLogout={handleLogout}
            />
        );
    }

    return (
        <DefaultLayout
            isLoading={ state.isLoading }
            hasErrors={ hasAuthenticationErrors }
        >
            {
                state.isAuthenticated
                    ? (
                        <>
                            <LandingPage/>
                            <button
                                className="btn primary mt-4"
                                onClick={ () => {
                                    handleLogout();
                                } }
                            >
                                Logout
                            </button>
                        </>
                    )
                    : (
                        <div className="content">
                            <h4 className={ "spa-app-description" }>
                                An automated system to obtain your Grama Certificates&nbsp;
                            </h4>
                            <button
                                className="btn primary"
                                onClick={ () => {
                                    handleLogin();
                                } }
                            >
                                Continue
                            </button>
                        </div>
                    )
            }
        </DefaultLayout>
    );
};