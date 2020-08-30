import React from 'react';
import './navigation.css';
import NavItem from './NavItem';

type NavigationProps = {
  categories: string[];
  category: number;
};

const Navigation: React.FC<NavigationProps> = ({ categories, category }) => {
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
                  onClick={(event: React.MouseEvent) => event.preventDefault()}
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
