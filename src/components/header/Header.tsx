import React from 'react';
import Navigation from '../navigation/Navigation';
import Score from '../score/Score';
import logoImg from '../../assets/images/logo.png';
import './header.css';

type HeaderProps = {
  categories: string[];
  category: number;
  setCategory: (idx: number) => void;
  score: number;
};

const Header: React.FC<HeaderProps> = ({ categories, category, setCategory, score }) => {
  return (
    <React.Fragment>
      <div className="header deep-purple darken-3">
        <div className="wrapper nav-wrapper">
          <div className="brand-logo">
            <div className="logo">
              <img src={logoImg} alt="logo" />
              <h2>Songbird</h2>
            </div>
            <Score score={score} />
          </div>
        </div>
        <Navigation categories={categories} category={category} setCategory={setCategory} />
      </div>
    </React.Fragment>
  );
};

export default Header;
