import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';

import { useHotkey } from '@tanstack/react-hotkeys';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';

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
          defaultValue={numInDelivery}
          placeholder={numInDelivery}
          type="number"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate({
              column: 'num_in_delivery',
              columnValue: newValue,
              id: id,
            });
            setDisplayInputBox(false);
          }}
          cellWidth="3rem"
        />
      ) : (
        numInDelivery
      )}
    </StyledCell>
  );
}

export default RbCell;
