import React from 'react';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { show } from '../features/customer/customerSlice';
import { useDispatch, useSelector } from 'react-redux';

import Filter from '../ui/Filter';
import SortBy from './SortBy';
import SpinnerMini from '../ui/SpinnerMini';
import Spinner from '../ui/Spinner';

import useScreenWidth from '../hooks/useScreenWidth';
import { useDeliveriesInfo } from '../features/deliveries/useDeliveriesInfo';

const StyledHeader = styled.header`
  grid-row: 1/1;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 5fr 2fr 2fr;
  grid-template-rows: 1fr;
  gap: 1rem;
  width: 100vw;
  height: auto;
  padding: 0.5rem 1%;
  justify-items: start;
  align-items: center;
  background-color: var(--color-brand-100);
`;
const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  gap: 1rem;
  border: none;
  background-color: var(--color-brand-100);
`;
const StyledButtonHeader = styled.button`
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: bolder;
  background-color: var(--color-indigo-700);
  color: var(--color-indigo-100);
  height: auto;
  font-size: 1.4rem;
  font-weight: 500;
  padding: 0.8rem 1.2rem;
  width: 12rem;
`;

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const pathName = location.pathname.split('/')[1];

  const isSidebarShown = useSelector((state) => state.sidebar.showSidebar);
  function showSidebar() {
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
      <StyledButtonContainer>
        {!isSidebarShown && (
          <StyledButtonHeader onClick={showSidebar}>
            Прикажи мени
          </StyledButtonHeader>
        )}

        <StyledButtonHeader onClick={() => navigate(linkedPage)}>
          {`${linkedPage === 'dashboard' ? 'Почетна' : 'Достава'}`}
        </StyledButtonHeader>
        <div></div>
        <StyledButtonHeader
          onClick={() =>
            navigate('/delivery', {
              state: { formState: 'delivery-form' },
              replace: true,
            })
          }
        >
          Нова достава
        </StyledButtonHeader>
      </StyledButtonContainer>
      {/* {deliveriesInfo && (
        <Filter
          filterField={'sortBy'}
          elements={deliveriesInfo?.map((delivery) => ({
            value: delivery.id_of_delivery,
            description: delivery.delvery_start_day,
          }))}
        />
      )} */}
      {deliveriesInfo && isNotMobile && (
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
