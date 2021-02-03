import React, { FC, useState } from 'react';
import navItems from '../../data/nav-items.json';
import Menu from './Menu';
import NavBar from './NavBar';

interface Props {
  bgActive: boolean;
  logoSrc?: string;
}

const NavMenu: FC<Props> = ({ bgActive, logoSrc }) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  const handleMenuToggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <>
      <Menu items={navItems} isOpen={isOpen} onRouteChange={handleMenuToggle} />
      <NavBar
        logoSrc={logoSrc}
        isOpen={isOpen}
        bgActive={bgActive}
        onToggle={handleMenuToggle}
      />
    </>
  );
};

export default NavMenu;
