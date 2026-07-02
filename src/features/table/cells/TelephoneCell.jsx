/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { updateField } from '../../../services/apiDeliveries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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
function TelephoneCell({ id, customerTelephone }) {
  const newValue = useSelector((state) => state.customers.newValue);

  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        updateField('customer_telephone', newValue, id);
        setDisplayInputBox(false);
      },
      onSuccess: () => {},
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    })
  );

  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });

  return (
    <StyledCell
      tabIndex="0"
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      {displayInputBox && !isPending ? (
        <InputChangeValue
          type="text"
          onSubmit={() => {
            mutate(newValue, id);
          }}
          cellWidth="13rem"
        />
      ) : (
        customerTelephone
      )}
    </StyledCell>
  );
}

export default TelephoneCell;
