import React from 'react';

type NavItemProps = {
  idx: number;
  title: string;
  isActive?: boolean;
  onClick: (event: React.MouseEvent) => void;
};

const NavItem: React.FC<NavItemProps> = ({ idx, title, isActive = false, onClick }) => {
  return (
    <React.Fragment>
      <li className="tab">
        <a href="/" className={isActive ? 'active' : ''} onClick={onClick}>
          {title}
        </a>
      </li>
    </React.Fragment>
  );
};

export default NavItem;
