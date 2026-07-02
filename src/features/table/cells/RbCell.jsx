/*eslint-disable react/prop-types */
import React, { useState } from 'react';

import styled from 'styled-components';

import { updateField } from '../../../services/apiDeliveries';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useHotkey } from '@tanstack/react-hotkeys';
const StyledCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  justify-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function RbCell({ numInDelivery, id }) {
  const newValue = useSelector((state) => state.customers.newValue);

  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        updateField('num_in_delivery', newValue, id);
        setDisplayInputBox(false);
      },
      onSuccess: () => {
        toast.success('Успешно промењен редни број доставе');
      },
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    }),
  );
  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });
  return (
    <StyledCell
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      {displayInputBox && !isPending ? (
        <InputChangeValue
          defaultValue={numInDelivery}
          placeholder={numInDelivery}
          type='number'
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={() => {
            mutate(newValue, id);
          }}
          cellWidth='3rem'
        />
      ) : (
        numInDelivery
      )}
    </StyledCell>
  );
}

export default RbCell;
