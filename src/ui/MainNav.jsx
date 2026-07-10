import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { HiOutlineCalendarDays } from 'react-icons/hi2';
import { HiOutlineUser } from 'react-icons/hi2';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import React from 'react';
import useScreenWidth from '../hooks/useScreenWidth';

const NavList = styled.ul`
  justify-self: flex-start;
  align-self: center;
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
    height: ${(props) => (props.$pageSize === 'mobile' ? '5rem' : '')};
    font-size: ${(props) => (props.$pageSize === 'mobile' ? '5rem' : '1.6rem')};
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
  const pageSize = useScreenWidth();
  console.log(pageSize);
  const isNotMobile = pageSize !== 'mobile';
  return (
    <NavList>
      <li>
        <StyledNavLink $pageSize={pageSize} to="/dashboard">
          <HiOutlineHome />
          {isNotMobile && <span>HOME</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink
          to={customer.customer_id ? '/customer' : '/customersData'}
        >
          <HiOutlineCalendarDays />
          {isNotMobile && <span>Customer</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/customersData">
          <HiOutlineHomeModern />
          {isNotMobile && <span>Customer data</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/delivery">
          <HiOutlineUser />
          {isNotMobile && <span>Delivery</span>}
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to="/summary">
          <HiOutlineCog8Tooth />
          {isNotMobile && <span>Summarty</span>}
        </StyledNavLink>
      </li>
    </NavList>
  );
}
export default MainNav;
