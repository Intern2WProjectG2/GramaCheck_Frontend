import React, { FunctionComponent, ReactElement } from "react";
import { DefaultLayout } from "../layouts/Default.jsx";

/**
 * Page to display for Invalid System Time Page.
 *
 * @param {InvalidSystemTimePagePropsInterface} props - Props injected to the component.
 *
 * @return {React.ReactElement}
 */
export const InvalidSystemTimePage = () => {

  return (
    <DefaultLayout>
      <h6 style={{
          fontSize: "30px",
          textTransform: "uppercase",
          fontWeight: 600,
          marginTop: "3rem",
          marginBottom: "8px",
          color: "#151515"
        }}>
          Your Clock is Invalid !
      </h6>
      <p style={{
          fontSize: "20px",
          fontWeight: 400,
          marginTop: "3rem",
          marginBottom: "3rem",
          color: "#151515"
        }}>
          It looks like your computer&rsquo;s date and time is incorrect. Please validate and try again
      </p>
    </DefaultLayout>
  );
};
