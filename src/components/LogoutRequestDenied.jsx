import React from "react";
import { DefaultLayout } from "../layouts/Default.jsx";

export const LogoutRequestDenied = (props) => {
  const {
    errorMessage,
    handleLogin,
    handleLogout
  } = props;

  return (
    <DefaultLayout>
      <div className="ui visible negative message">
        <div className="mt-4 h3 b"> { errorMessage } </div>
        <p className="my-4">
          <a className="link-button pointer" role="button" onClick={handleLogin}>
            Try Log in again
          </a>
          &nbsp;or&nbsp;
          <a onClick={handleLogout} className="link-button pointer" role="button">
            Log out from the application.
          </a>
        </p>
      </div>
    </DefaultLayout>
  );
};
