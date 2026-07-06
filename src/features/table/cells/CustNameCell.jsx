import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useHotkey } from '@tanstack/react-hotkeys';

import { updateField } from '../../../services/apiDeliveries';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { sendCustomerForDeliveryView } from '../../delivery/customersSlice';
import { hide } from '../../customer/customerSlice';
const StyledCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  word-wrap: balance;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

function CustNameCell({ name, id, customer }) {
  const newValue = useSelector((state) => state.customers.newValue);

  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const dispatch = useDispatch();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        updateField('name', newValue, id);
      },
      onSuccess: () => {
        setDisplayInputBox(false);
        toast.success('Успешно промењено име купца');
      },
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    }),
  );
  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });
  function handleShowCustomer(customer) {
    dispatch(sendCustomerForDeliveryView(customer));
    dispatch(hide());
  }

  return (
    <StyledCell
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      <button onClick={() => handleShowCustomer(customer)}>
        <Link to='/customer'>🚙</Link>
      </button>
      {displayInputBox && !isPending ? (
        <InputChangeValue
          placeholder={name}
          type='text'
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={() => {
            mutate(newValue, id);
          }}
          cellWidth='20rem'
        />
      ) : (
        name
      )}
    </StyledCell>
  );
}

export default CustNameCell;
