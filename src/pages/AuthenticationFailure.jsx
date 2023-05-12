import React, { useState } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { DefaultLayout } from "../layouts/Default.jsx";

export const AuthenticationFailure = () => {

  const { signIn } = useAuthContext();
  const [ hasAuthenticationErrors, setHasAuthenticationErrors ] = useState<boolean>(false);
  
  const handleLogin = () => {
    signIn()
        .catch(() => setHasAuthenticationErrors(true));
  };

  return (
    <DefaultLayout hasErrors={ hasAuthenticationErrors }>
      <div className="content">
          <div className="ui visible negative message">
              <div className="header"><b>Authentication Error!</b></div>
              <p>Please check application configuration and try login again!.</p>
          </div>
          <button className="btn primary" onClick={ handleLogin }>Login</button>
      </div>
    </DefaultLayout>
  );
};
