import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { HiOutlineUser } from 'react-icons/hi2';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import React from 'react';
/* eslint-disable react/prop-types */
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  const customer = useSelector((state) => state.customers.customerInDelivery);

  return (
    <NavList>
      <li>
        <StyledNavLink to="/dashboard">
          <HiOutlineHome />
          <span>HOME</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to={customer.customer_id ? '/customer' : '/customersData'}
        >
          <HiOutlineCalendarDays />
          <span>Customer</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/customersData">
          <HiOutlineHomeModern />
          <span>Customer data</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/delivery">
          <HiOutlineUser />
          <span>Delivery</span>
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/summary">
          <HiOutlineCog8Tooth />
          <span>Summarty</span>
        </StyledNavLink>
      </li>
    </NavList>
  );
}
export default MainNav;
