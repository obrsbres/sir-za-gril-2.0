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
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function TradCheeseCell({ id, tradPack, tradQuant }) {
  const [displayInputBoxQuant, setDisplayInputBoxQuant] = useState(false);
  const [displayInputBoxPack, setDisplayInputBoxPack] = useState(false);
  const [column, setColumn] = useState('');

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

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
            onSubmit={(newValue) => {
              setColumn('trad_quant');
              mutate({ column: 'trad_quant', columnValue: newValue, id: id });
              setDisplayInputBoxQuant(false);
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
            onSubmit={(newValue) => {
              setColumn('trad_pack');
              mutate({ column: 'trad_pack', columnValue: newValue, id: id });
              setDisplayInputBoxPack(false);
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
