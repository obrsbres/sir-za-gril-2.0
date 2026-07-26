import React, { useState } from 'react';
import styled from 'styled-components';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import NewRowButton from '../tableUIs/NewRowButton';
import { getDeliveries, insertRow } from '../../../services/apiDeliveries';
import { BiRegistered } from 'react-icons/bi';
import { useForm } from 'react-hook-form';
import { show, changeShowInputState } from '../../delivery/showFormSlice';
import { useDispatch, useSelector } from 'react-redux';
import useScreenWidth from '../../../hooks/useScreenWidth';

const StyledHeadRow = styled.tr`
  width: fit-content;
  font-size: ${(props) => (props.$pageSize === 'mobile' ? '1rem' : '1.6rem')};
  font-weight: bold;
  display: grid;
  grid-template-columns: ${(props) =>
    props.$pageSize === 'mobile'
      ? '2rem 14rem 8rem 8rem 5rem'
      : '3rem 20rem 8rem 8rem 7rem 15rem 11rem 10rem 20rem 6rem 3rem'};
  grid-template-rows: 4rem;
  background-color: var(--color-blue-700);
  color: var(--color-blue-100);
`;

export const StyledHeadCell = styled.td`
  border-style: solid;
  border-radius: 1px;
  border-width: 1px;
  border-color: var(--color-silver-100);
  border-collapse: collapse;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function HeadRow() {
  const showInputForm = useSelector((state) => state.inputForm.showInputForm);
  const queryClient = useQueryClient();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.customers.customers);
  const num = data.length + 1;
  const { isPending: isInserting, mutate } = useMutation({
    mutationFn: (/*num*/) => /*insertRow(num)*/ show(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['current_delivery'] });
    },
    onError: (err) => alert(err.message),
  });
  const pageSize = useScreenWidth();
  const isNotMobile = pageSize !== 'mobile';
  return (
    <StyledHeadRow $pageSize={pageSize}>
      <StyledHeadCell>РБ</StyledHeadCell>
      <StyledHeadCell>КУПАЦ</StyledHeadCell>
      <StyledHeadCell>
        <p>ГРИЛ</p>
        <p style={{ fontSize: '1rem' }}>КОЛ | ПАК</p>
      </StyledHeadCell>
      <StyledHeadCell>
        <p>СИТАН</p>
        <p style={{ fontSize: '1rem' }}>КОЛ | ПАК</p>
      </StyledHeadCell>
      <StyledHeadCell>УВАРА</StyledHeadCell>
      {isNotMobile && <StyledHeadCell>АДРЕСА</StyledHeadCell>}
      {isNotMobile && <StyledHeadCell>ТЕЛЕФОН</StyledHeadCell>}
      {isNotMobile && <StyledHeadCell>ВРЕМЕ</StyledHeadCell>}
      {isNotMobile && <StyledHeadCell>НАП.</StyledHeadCell>}
      {isNotMobile && <StyledHeadCell>ЦЕНА</StyledHeadCell>}
      {isNotMobile && (
        <StyledHeadCell>
          <NewRowButton
            disabled={isInserting}
            onClick={() => {
              dispatch(show());
            }}
          >
            +
          </NewRowButton>
        </StyledHeadCell>
      )}
    </StyledHeadRow>
  );
}

export default HeadRow;
