import React from "react";

export const DefaultLayout = (props) => {
    const {
        children,
        isLoading,
        hasErrors
    } = props;

    return (
        <>
            <div className="container">
                <div className="header-title">
                    <h1>
                        Grama Check
                    </h1>
                </div>
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
