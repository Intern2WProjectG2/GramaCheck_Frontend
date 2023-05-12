import React from "react";
import { useHistory } from "react-router-dom";
import { DefaultLayout } from "../layouts/Default.jsx";

export const NotFoundPage = () => {

    const history = useHistory();

    return (
        <DefaultLayout>
            <h3>
                404: Page not found
            </h3>
            <button className="btn primary" onClick={() => { history.push("/") }}>Go back to home</button>
        </DefaultLayout>
    );
};
