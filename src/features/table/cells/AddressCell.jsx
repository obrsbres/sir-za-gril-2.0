import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useHotkey } from '@tanstack/react-hotkeys';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { updateField } from '../../../services/apiDeliveries';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { useForm } from 'react-hook-form';

const StyledAddressCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-wrap: balance;
`;
function AddressCell({ id, customerAddress }) {
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: (newValue) => {
        updateField('customer_address', newValue, id);
      },
      onSuccess: () => {
        setDisplayInputBox(false);
        toast.success('Успешно промењено поље адресе купца');
      },
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    })
  );

  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });

  return (
    <StyledAddressCell
      tabIndex="0"
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      {displayInputBox && !isPending ? (
        <InputChangeValue
          placeholder={customerAddress}
          type="text"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate(newValue);
          }}
          cellWidth="13rem"
        />
      ) : (
        customerAddress
      )}
    </StyledAddressCell>
  );
}

export default AddressCell;
