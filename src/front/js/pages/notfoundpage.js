import React from 'react';
import { Link } from 'react-router-dom';

const myComponentStyle = {
    color:'black',
}

export const Notfound = () => {
    return(
  <div>
    <h1 style={myComponentStyle}>404 - Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
)};
