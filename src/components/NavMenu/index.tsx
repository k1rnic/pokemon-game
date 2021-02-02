import React, { FC, Fragment, useState } from 'react';
import Menu from './Menu';
import NavBar from './NavBar';
import navItems from '../../data/nav-items.json';

interface Props {
  onRouteChangeClick: (page: string) => any;
}

const NavMenu: FC<Props> = ({ onRouteChangeClick }) => {
  const [active, setActive] = useState(false);

  const handleMenuToggle = () => {
    setActive((state) => !state);
  };

  const handleRouteChange = (route: string) => {
    setActive((state) => !state);
    onRouteChangeClick(route);
  };

  return (
    <Fragment>
      <Menu
        items={navItems}
        active={active}
        onRouteChangeClick={handleRouteChange}
      />
      <NavBar active={active} onToggle={handleMenuToggle} />
    </Fragment>
  );
};

export default NavMenu;
