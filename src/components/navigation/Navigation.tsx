import React from 'react';
import './navigation.css';
import NavItem from './NavItem';

const tmpData: string[] = [
  'Разминка',
  'Воробьиные',
  'Лесные птицы',
  'Певчие птицы',
  'Хищные птицы',
  'Морские птицы',
];

const Navigation: React.FC = () => {
  const listItemOnClick = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="navigation">
        <nav className="nav-extended deep-purple darken-3">
          <div className="wrapper nav-content">
            <ul className="tabs tabs-transparent">
              {tmpData.map((item, idx) => (
                <NavItem
                  key={idx}
                  title={item}
                  onClick={listItemOnClick}
                  isActive={idx === 0}
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
