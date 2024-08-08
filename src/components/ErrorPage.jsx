import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  const errorMessage = error?.statusText || error?.message || "An unexpected error occurred.";
  const statusCode = error?.status || 500;

  return (
    <div>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
        <div>
          <button onClick={() => window.history.back()}>Go Back</button>
          <Link to="/">Go to Homepage</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;