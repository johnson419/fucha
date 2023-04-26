import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/loginpage">LOGINPAGE</Link>
        </li>
        <li>
          <Link to="/homepage">HOMEPAGE</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
