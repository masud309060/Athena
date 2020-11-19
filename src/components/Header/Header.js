import React from 'react';
import headerImg from '../../images/Illustration/16 [Converted]@2x.png';
import NavBar from '../Navbar/Navbar';
import './Header.css';
import bg2 from '../../images/Illustration/Group 46@2x.png';

const Header = () => {
  return (
    <div className="main-header">
      <NavBar></NavBar>
      <div className="bg2">
        {/* <img src={bg2} alt=""/> */}
      </div>
      <div className="bg1"></div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6 mb-5">
              <h1 className="main-heading">Florence <br/> agency </h1>
              <p className="text-secondary w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt debitis doloribus eligendi quam libero asperiores est.</p>
              <button className="btn-brand mt-5">See Pricing</button>
            </div>
            <div className="header-img col-md-6 mb-5">
              <img src={headerImg} alt=""/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Header;