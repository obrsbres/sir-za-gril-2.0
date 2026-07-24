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
  justify-content: space-evenly;
  align-items: center;
`;

function GrilCell({ id, grillPack, grillQuant }) {
  const [displayInputBoxQuant, setDisplayInputBoxQuant] = useState(false);
  const [displayInputBoxPack, setDisplayInputBoxPack] = useState(false);
  const [column, setColumn] = useState('');

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

  useHotkey(
    'esc',
    () => {
      setDisplayInputBoxQuant(false);
      setDisplayInputBoxPack(false);
    },
    {
      conflictBehavior: 'allow',
    }
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
            mutate({ column: 'grill_quant', columnValue: newValue, id: id });
            setDisplayInputBoxQuant(false);
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
            mutate({ column: 'grill_pack', columnValue: newValue, id: id });
            setDisplayInputBoxPack(false);
          }}
          cellWidth="6rem"
        />
      ) : (
        <span
          onClick={() => {
            setDisplayInputBoxPack(true);
            setColumn('grill_pack');
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
