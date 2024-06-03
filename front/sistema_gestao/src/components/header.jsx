import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Nav, NavItem, NavList } from '../styles/header';


const NavLink = styled(Link)`
  color: #61dafb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Header = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/">Inicio</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/gastos">Gastos</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/faturamento">Faturamento</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Header;