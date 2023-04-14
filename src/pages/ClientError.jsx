import React from "react";
import { useRouteError } from "react-router-dom";

export default function ClientError() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        Error says, "<i>{error.statusText || error.message}</i>"
      </p>
    </div>
  );
}
