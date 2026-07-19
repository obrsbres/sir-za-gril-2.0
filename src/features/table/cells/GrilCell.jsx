import React, { useState } from 'react';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import toast from 'react-hot-toast';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { updateField } from '../../../services/apiDeliveries';

const StyledCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  justify-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

function GrilCell({ id, grillPack, grillQuant }) {
  const [displayInputBoxQuant, setDisplayInputBoxQuant] = useState(false);
  const [displayInputBoxPack, setDisplayInputBoxPack] = useState(false);
  const [column, setColumn] = useState('');

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: (newValue) => {
        updateField(column, newValue, id);
        column === 'grill_quant' && setDisplayInputBoxQuant(false);
        column === 'grill_pack' && setDisplayInputBoxPack(false);
      },
      onSuccess: () => {
        toast.success('Успешно промењени подаци за грил');
      },
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    })
  );

  return (
    <StyledCell>
      {displayInputBoxQuant && !isPending ? (
        <InputChangeValue
          defaultValue={grillQuant}
          placeholder={grillQuant}
          type="number"
          onBlur={() => setDisplayInputBoxQuant(false)}
          onSubmit={(newValue) => {
            mutate(newValue);
          }}
          cellWidth="3rem"
        />
      ) : (
        <span
          onClick={() => {
            setDisplayInputBoxQuant(true);
            setColumn('grill_quant');
          }}
          style={{ color: 'var(--color-red-800)' }}
        >
          {grillQuant}
        </span>
      )}

      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> kg | </span>

      {displayInputBoxPack && !isPending ? (
        <InputChangeValue
          type="checkbox"
          onBlur={() => setDisplayInputBoxPack(false)}
          onSubmit={(newValue) => {
            mutate(newValue);
          }}
          cellWidth="6rem"
        />
      ) : (
        <span
          onClick={() => {
            setDisplayInputBoxPack(true);
            setColumn('grill_pack');
            console.log('to je ta', column, id);
          }}
          style={{ color: 'var(--color-red-800)' }}
        >
          {grillPack}
        </span>
      )}
    </StyledCell>
  );
}

export default GrilCell;
