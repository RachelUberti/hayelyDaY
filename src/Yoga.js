import React from "react";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './scss/main.scss';
import './scss/components/_body.scss';


function Yoga() {
  return (
    <div className="Yoga">
      <Helmet>
        <title>Yoga Page</title>
        <meta
          name="description"
          content="Yoga page" />
      </Helmet>

      <div>
        <Link to="/"><button className="navbar__button-menu">Home</button></Link>
      </div>

      <h1> Yoga welcome</h1>
    </div >
  );
}

export default Yoga;