/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useSelector } from 'react-redux';

import styled from 'styled-components';
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
  justify-content: center;
  align-items: center;
`;

function TradCheeseCell({ id, tradPack, tradQuant }) {
  const newValue = useSelector((state) => state.customers.newValue);

  const [displayInputBoxQuant, setDisplayInputBoxQuant] = useState(false);
  const [displayInputBoxPack, setDisplayInputBoxPack] = useState(false);
  const [column, setColumn] = useState('');

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        updateField(column, newValue, id);
        setDisplayInputBoxPack(false);
        setDisplayInputBoxQuant(false);
      },
      onSuccess: () => {
        toast.success('Успешно промењени подаци за ситан');
      },
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    })
  );

  return (
    <StyledCell>
      <span
        onClick={() => {
          setDisplayInputBoxQuant(true);
        }}
      >
        {displayInputBoxQuant && !isPending ? (
          <InputChangeValue
            defaultValue={tradQuant}
            placeholder={tradQuant}
            type="number"
            onBlur={() => setDisplayInputBoxQuant(false)}
            onSubmit={() => {
              setColumn('trad_quant');
              mutate(column, newValue, id);
            }}
            cellWidth="3rem"
          />
        ) : (
          <span style={{ color: 'var(--color-red-800)' }}>{tradQuant}</span>
        )}
      </span>
      <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}> kg | </span>
      <span
        onClick={() => {
          setDisplayInputBoxPack(true);
        }}
      >
        {displayInputBoxPack && !isPending ? (
          <InputChangeValue
            type="checkbox"
            onBlur={() => setDisplayInputBoxPack(false)}
            onSubmit={() => {
              setColumn('trad_pack');
              mutate(column, newValue, id);
            }}
            cellWidth="tr"
          />
        ) : (
          <span style={{ color: 'var(--color-red-800)' }}>{tradPack}</span>
        )}
      </span>
    </StyledCell>
  );
}

export default TradCheeseCell;
