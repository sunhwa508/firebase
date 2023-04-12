import React, { Fragment } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let message;

  if (!isRouteErrorResponse(error)) {
    return null;
  }

  if (error.status === 404) {
    message = <p>There's nothing here.</p>;
  } else if (error.status === 500) {
    message = <p>There was a problem fetching the data for this page.</p>;
  } else {
    message = <p>An unexpected error occurred.</p>;
  }

  return (
    <Fragment>
      <header>
        <h1>{error.statusText || "ERROR"}</h1>
      </header>
      <main>{message}</main>
    </Fragment>
  );
}
