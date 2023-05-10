import React, { FunctionComponent, ReactElement } from "react";
import { DefaultLayout } from "../layouts/Default.jsx";

const LogoutRequestDeniedInterface = {
  /**
   * Error message to show in the title
   */
  errorMessage: null,
  /**
   * Handles Login process
   */
  handleLogin: ()=>{},
  /**
   * Handles Logout process
   */
  handleLogout: () => {}
}

/**
 * Page to display for Invalid System Time Page.
 *
 * @param {LogoutRequestDeniedInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
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
