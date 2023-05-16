import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from "../pages/Header.jsx";

export const DefaultLayout = (props) => {
    const {
        children,
        isLoading,
        hasErrors
    } = props;

    return (
        <>
            <div /*className="container"*/>
                <Header />
                {
                    isLoading
                        ? <div className="content">Loading ...</div>
                        : hasErrors
                            ? <div className="content">An error occured while authenticating ...</div>
                            : children
                }
            </div>
        </>
    );
};
