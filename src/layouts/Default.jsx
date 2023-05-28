import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

export const DefaultLayout = (props) => {
    const {
        children,
        isLoading,
        hasErrors,
        hasLogoutFailureError,
        setHasLogoutFailureError
    } = props;

    return (
        <div style={{display:"flex", flexDirection:"column", minHeight:"100vh"}}>
            <Header
                setHasLogoutFailureError={setHasLogoutFailureError}
                hasLogoutFailureError={hasLogoutFailureError} />
            {
                isLoading
                    ? <div className="content">Loading ...</div>
                    : hasErrors
                        ? <div className="content">An error occured while authenticating ...</div>
                        : children
            }
            <Footer />
        </div>
    );
};
