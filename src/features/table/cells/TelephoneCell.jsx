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
function TelephoneCell({ id, customerTelephone }) {
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

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
          onSubmit={(newValue) => {
            mutate({
              column: 'customer_telephone',
              columnValue: newValue,
              id: id,
            });
            setDisplayInputBox(false);
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
