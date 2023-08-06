import React from 'react'
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorRoute() {
  
    const error = useRouteError();
    console.error(error);
  
  return (
    <>
    <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Untill then <Link to="/">TAP</Link> your potential</p>

    </>
  )
}
