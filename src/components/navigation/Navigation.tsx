import React from 'react';
import './navigation.css';
import NavItem from './NavItem';

type NavigationProps = {
  categories: string[];
  category: number;
  setCategory: (idx: number) => void;
};

const Navigation: React.FC<NavigationProps> = ({ categories, category, setCategory }) => {
  const onNavItemClick = (event: React.MouseEvent, idx: number) => {
    event.preventDefault();
    setCategory(idx);
  };

  return (
    <React.Fragment>
      <div className="navigation">
        <nav className="nav-extended deep-purple darken-3">
          <div className="wrapper nav-content">
            <ul className="tabs tabs-transparent">
              {categories.map((item, idx) => (
                <NavItem
                  key={idx}
                  title={item}
                  onClick={(event: React.MouseEvent) => onNavItemClick(event, idx)}
                  isActive={idx === category}
                  idx={idx}
                />
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
