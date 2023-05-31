import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { LogoutRequestDenied } from "./LogoutRequestDenied.jsx";
import { useAuthContext } from "@asgardeo/auth-react";
import LOGO from '../images/logo.png';

export const Header = ({ setHasLogoutFailureError, hasLogoutFailureError }) => {

    const {
        state,
        signOut,
    } = useAuthContext();

    const search = useLocation().search;
    const stateParam = new URLSearchParams(search).get('state');
    const errorDescParam = new URLSearchParams(search).get('error_description');

    const handleLogout = () => {
        signOut();
    };

    useEffect(() => {
        if (stateParam && errorDescParam) {
            if (errorDescParam === "End User denied the logout request") {
                setHasLogoutFailureError(true);
            }
        }
    }, [stateParam, errorDescParam]);

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

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <h1 className="navbar-brand" href="#">
                    <Link to="/">
                        <img src={LOGO} alt="" width="200" height="35" className="d-inline-block align-text-top" />
                    </Link>
                </h1>

                <div>
                    <div>{state.email}</div>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => {
                            handleLogout();
                        }}
                    >
                        Logout
                    </button>
                </div>

            </div>
        </nav>

    );
};
