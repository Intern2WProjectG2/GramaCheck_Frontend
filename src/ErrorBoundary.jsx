import { AsgardeoAuthException } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { AuthenticationFailure } from "./pages/AuthenticationFailure.jsx";
import { InvalidSystemTimePage } from "./pages/InvalidSystemTime.jsx";

const ErrorBoundaryProps = {
  error: AsgardeoAuthException,
  children: ReactElement
}

export const ErrorBoundary = (props) => {
  const { error, children } = props;

  if (error?.code === "JS-CRYPTO_UTILS-IVIT-IV02") {
    return <InvalidSystemTimePage />
  } else if (error?.code === "SPA-MAIN_THREAD_CLIENT-SI-SE01") {
    return <AuthenticationFailure />
  }

  return children;
};
