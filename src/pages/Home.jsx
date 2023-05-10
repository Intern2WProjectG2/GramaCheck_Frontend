import { Hooks, useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement, useEffect, useState } from "react";
import { default as authConfig } from "../config.json";
import REACT_LOGO from "../images/react-logo.png";
import { DefaultLayout } from "../layouts/Default.jsx";
import { AuthenticationResponse } from "../components";
import { useLocation } from "react-router-dom";
import { LogoutRequestDenied } from "../components/LogoutRequestDenied.jsx";
import { USER_DENIED_LOGOUT } from "../constants/errors";

/**
 * Decoded ID Token Response component Prop types interface.
 */
//type HomePagePropsInterface = {};

/**
 * Home page for the Sample.
 *
 * @param {HomePagePropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const HomePage = (HomePagePropsInterface) => {

    const {
        state,
        signIn,
        signOut,
        getBasicUserInfo,
        getIDToken,
        getDecodedIDToken,
        on
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

   /**
     * handles the error occurs when the logout consent page is enabled
     * and the user clicks 'NO' at the logout consent page
     */
    useEffect(() => {
        on(Hooks.SignOut, () => {
            setHasLogoutFailureError(false);
        });

        on(Hooks.SignOutFailed, () => {
            if(!errorDescParam) {
                handleLogin();
            }
        })
    }, [ on ]);

    const handleLogin = () => {
        setHasLogoutFailureError(false);
        signIn()
            .catch(() => setHasAuthenticationErrors(true));
    };

    const handleLogout = () => {
        signOut();
    };

    // If `clientID` is not defined in `config.json`, show a UI warning. 
    if (!authConfig?.clientID) {

        return (
            <div className="content">
                <h2>You need to update the Client ID to proceed.</h2>
                <p>Please open "src/config.json" file using an editor, and update
                    the <code>clientID</code> value with the registered application's client ID.</p>
                <p>Visit repo <a
                    href="https://github.com/asgardeo/asgardeo-auth-react-sdk/tree/master/samples/asgardeo-react-app">README</a> for
                    more details.</p>
            </div>
        );
    }

    if (hasLogoutFailureError) {
        return (
            <LogoutRequestDenied
                errorMessage={USER_DENIED_LOGOUT}
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
                        <div className="content">
{/*                             <AuthenticationResponse
                                derivedResponse={ derivedAuthenticationState }
                            /> */}
                            <h2 className={ "spa-app-description" }>
                                Welcome to Grama Check !&nbsp;
                            </h2>
                            <button
                                className="btn primary mt-4"
                                onClick={ () => {
                                    handleLogout();
                                } }
                            >
                                Logout
                            </button>
                        </div>
                    )
                    : (
                        <div className="content">
                            <div className="home-image">
                                <img src={ REACT_LOGO } className="react-logo-image logo"/>
                            </div>
                            <h4 className={ "spa-app-description" }>
                                An automated system to obtain your Grama Certificates&nbsp;
                            </h4>
                            <button
                                className="btn primary"
                                onClick={ () => {
                                    handleLogin();
                                } }
                            >
                                Login
                            </button>
                        </div>
                    )
            }
        </DefaultLayout>
    );
};