import React, { Fragment, useState } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';
import navItems from '../../data/nav-items.json';

const NavMenu = () => {
  const [active, setActive] = useState(false);

  const handleMenuToggle = () => {
    setActive((state) => !state);
  };

  return (
    <Fragment>
      <Menu items={navItems} active={active} onToggle={handleMenuToggle} />
      <NavBar active={active} onToggle={handleMenuToggle} />
    </Fragment>
  );
};

export default NavMenu;
