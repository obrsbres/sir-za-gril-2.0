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
import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';
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
  // const newValue = useSelector((state) => state.customers.newValue);
  // const [newValue, setNewValue] = useState('');
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const dispatch = useDispatch();

  const { mutate, isPending } = useUpdateDelivery();
  // const { isPending, mutate } = useMutation({
  //   mutationFn: (newValue) => updateField('name', newValue, id),
  //   onSuccess: () => {
  //     toast.success('Успешно промењено име купца');
  //     queryClient.invalidateQueries({
  //       queryKey: ['current_delivery'],
  //     });
  //     setDisplayInputBox(false);
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
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
      <button>
        <Link to='/customer'>🚙</Link>
      </button>
      {displayInputBox && !isPending ? (
        <InputChangeValue
          placeholder={name}
          type='text'
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate({ column: 'customer_name', columnValue: newValue, id: id });
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
