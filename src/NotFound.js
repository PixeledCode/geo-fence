import React from 'react'
import { Link } from 'react-router-dom';
const NotFound = () =>
  <div style={{textAlign:"center"}}>
      <h1 className="error404">404</h1>
      <h2 className="errorText">Page Not Found</h2>
    <p className="errorHome">
        <Link to="/">Go to Home </Link>
    </p>
  </div>

export default NotFound