import React from 'react';
import Navigation from '../navigation/Navigation';
import Score from '../score/Score';
import logoImg from '../../images/logo.png';
import './header.css';

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <div className="header deep-purple darken-3">
        <div className="wrapper nav-wrapper">
          <div className="brand-logo">
            <div className="logo">
              <img src={logoImg} alt="logo" />
              <h2>Songbird</h2>
            </div>
            <Score score={110} />
          </div>
        </div>
        <Navigation />
      </div>
    </React.Fragment>
  );
};

export default Header;
