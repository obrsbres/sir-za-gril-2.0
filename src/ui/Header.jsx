import React from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { show, hide } from '../features/customer/customerSlice';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../ui/Filter';
import SortBy from './SortBy';
import SpinnerMini from '../ui/SpinnerMini';
import Spinner from '../ui/Spinner';

import useScreenWidth from '../hooks/useScreenWidth';
import { useDeliveriesInfo } from '../features/deliveries/useDeliveriesInfo';

const StyledHeader = styled.header`
  margin: 2px 1px 2px 1px;
  display: grid;
  grid-template-columns: 20rem 20rem 1fr 20rem 30%;
  grid-template-rows: 1fr;
  gap: 2rem;
  width: 100vw;
  height: auto;
  padding: 0.5rem;
  justify-content: start;
  align-items: center;
  background-color: var(--color-brand-100);
  /* padding: 1rem; */
  /* border-bottom: 1px solid var(--color-green-700); */
`;
const StyledButtonHeader = styled.button`
  border: 1px solid var(--color-indigo-700);
  border-radius: 8px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bolder;
  /* text-transform: uppercase; */
  color: #1f1f1f;
  background-color: var(--color-indigo-700);
  color: var(--color-indigo-100);
  height: auto;
  padding: 0.5rem 1rem;
  width: fit-content;
  flex-wrap: wrap;
`;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const pathName = location.pathname.split('/')[1];

  const isSidebarShown = useSelector((state) => state.sidebar.showSidebar);
  function handleToogleSidebar() {
    if (isSidebarShown) {
      dispatch(hide());
    }
    if (!isSidebarShown) {
      dispatch(show());
    }
  }
  const isNotMobile = useScreenWidth() !== 'mobile';
  const linkedPage = pathName === 'dashboard' ? 'customersData' : 'dashboard';
  const {
    isPending: isDeliveriesLoading,
    error,
    deliveries: deliveriesInfo,
  } = useDeliveriesInfo();

  const pageSize = useScreenWidth();

  if (isDeliveriesLoading) return <Spinner />;

  return (
    <StyledHeader $pageSize={pageSize}>
      {pathName !== 'dashboard' && (
        <StyledButtonHeader onClick={handleToogleSidebar}>
          {`${isSidebarShown ? 'Скриј' : 'Прикажи'} мени`}
        </StyledButtonHeader>
      )}
      <StyledButtonHeader onClick={() => navigate(linkedPage)}>
        {`${linkedPage === 'dashboard' ? 'Почетна' : 'Достава'}`}
      </StyledButtonHeader>
      <div></div>
      <StyledButtonHeader onClick={() => navigate('/delivery')}>
        Нова достава
      </StyledButtonHeader>
      {deliveriesInfo && (
        <SortBy
          options={deliveriesInfo?.map((delivery) => ({
            value: delivery.id_of_delivery,
            label: delivery.delvery_start_day,
          }))}
        />
      )}
    </StyledHeader>
  );
}

export default Header;
