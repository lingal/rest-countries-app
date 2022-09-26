import React from 'react'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section>
      <h1>ooops! This section doesn't exist</h1>
      <Link to='/'>back home</Link>
    </section>
  );
}

export default ErrorPage;