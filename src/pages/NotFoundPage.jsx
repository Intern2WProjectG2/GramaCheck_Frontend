import React, { FunctionComponent, ReactElement } from "react";
import { useHistory } from "react-router-dom";
import { DefaultLayout } from "../layouts/Default.jsx";

/**
 * Decoded ID Token Response component Prop types interface.
 */
//type NotFoundPagePropsInterface = {};

/**
 * Page to display for 404.
 *
 * @param {NotFoundPagePropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const NotFoundPage = () => {

    const history = useHistory();

    return (
        <DefaultLayout>
            <h3>
                404: Page not found
            </h3>
            <button className="btn primary" onClick={() => { history.push("/home") }}>Go back to home</button>
        </DefaultLayout>
    );
};
