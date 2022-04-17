import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './style';
import LogoSrc from '../../images/Emzini4.png';
import styled from 'styled-components';

const Logo = styled.img`
  width: 300px;
  height: 180px;
  margin: 15px;
`;
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <Logo src={LogoSrc} />
        </NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;