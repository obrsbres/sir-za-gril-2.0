import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useHotkey } from '@tanstack/react-hotkeys';

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

function CreamCell({ id, creamQuant }) {
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: (newValue) => {
        updateField('cream_quant', newValue, id);
        setDisplayInputBox(false);
      },
      onSuccess: () => {
        toast.success('Успешно промењено поље уваре');
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
    <StyledCell
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      {displayInputBox && !isPending ? (
        <InputChangeValue
          defaultValue={creamQuant}
          placeholder={creamQuant}
          type="number"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate(newValue);
          }}
          cellWidth="3rem"
        />
      ) : (
        creamQuant
      )}
    </StyledCell>
  );
}

export default CreamCell;
