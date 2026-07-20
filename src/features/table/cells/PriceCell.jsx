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
const PRICES = {
  grilPrice: 1500,
  tradPrice: 1000,
  creamPrice: 300,
};
function PriceCell({ id, price, grilQuant, tradQuant, creamQuant }) {
  const usualPrice =
    grilQuant * PRICES.grilPrice +
    tradQuant * PRICES.tradPrice +
    creamQuant * PRICES.creamPrice;

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
          defaultValue={price}
          placeholder={price}
          type="number"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate({ column: 'bill', columnValue: newValue, id: id });
            setDisplayInputBox(false);
          }}
          cellWidth="5rem"
        />
      ) : price ? (
        price
      ) : (
        usualPrice
      )}
    </StyledCell>
  );
}

export default PriceCell;
