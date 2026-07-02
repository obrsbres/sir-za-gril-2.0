/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';
import toast from 'react-hot-toast';

import { updateField } from '../../../services/apiDeliveries';
import InputChangeValue from '../tableUIs/InputChangeValue';

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

function NoteCell({ children, id, customerNote }) {
  const newValue = useSelector((state) => state.customers.newValue);

  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        updateField('customer_note', newValue, id);
        setDisplayInputBox(false);
      },
      onSuccess: () => {
        toast.success('Успешно промењено поље напомене');
      },
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    })
  );

  return (
    <StyledCell
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      {displayInputBox && !isPending ? (
        <InputChangeValue
          placeholder={customerNote}
          type="text"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={() => {
            mutate(newValue, id);
          }}
          cellWidth="15rem"
        />
      ) : (
        customerNote
      )}
    </StyledCell>
  );
}

export default NoteCell;
