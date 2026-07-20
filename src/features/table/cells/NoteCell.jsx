import { useState } from 'react';

import { useSelector } from 'react-redux';
import { useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';
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

function NoteCell({ children, id, customerNote }) {
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
          placeholder={customerNote}
          type="text"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate({ column: 'customer_note', columnValue: newValue, id: id });
            setDisplayInputBox(false);
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
