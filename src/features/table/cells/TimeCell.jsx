/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import styled from 'styled-components';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { updateField } from '../../../services/apiDeliveries';
import { formatTime } from '../../../utils/helpers';
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
  text-align: center;
`;

const DEFAULT_TIME = '19:00:00';
function TimeCell({ id, timeForDelivery }) {
  const newValue = useSelector((state) => state.customers.newValue);

  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        setDisplayInputBox(false);
        updateField('time_for_delivery', newValue, id);
      },
      onSuccess: () => {
        toast.success('Успешно промењено време');
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
          type='time'
          defaultValue={timeForDelivery}
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={() => {
            mutate(newValue, id);
          }}
          cellWidth='8rem'
        />
      ) : timeForDelivery ? (
        formatTime(timeForDelivery)
      ) : (
        DEFAULT_TIME
      )}
    </StyledCell>
  );
}

export default TimeCell;
