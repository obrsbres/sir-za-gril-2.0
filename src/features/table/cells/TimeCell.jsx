import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';

import { useHotkey } from '@tanstack/react-hotkeys';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';
import { formatTime } from '../../../utils/helpers';

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
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

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
          type="time"
          min="15:00"
          max="23:00"
          step="900"
          lang="sr"
          defaultValue={timeForDelivery}
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate({
              column: 'time_for_delivery',
              columnValue: newValue,
              id: id,
            });
            setDisplayInputBox(false);
          }}
          cellWidth="8rem"
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
