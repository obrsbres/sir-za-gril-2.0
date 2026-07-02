/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';
import toast from 'react-hot-toast';
import { useHotkey } from '@tanstack/react-hotkeys';

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
  const newValue = useSelector((state) => state.customers.newValue);

  const usualPrice =
    grilQuant * PRICES.grilPrice +
    tradQuant * PRICES.tradPrice +
    creamQuant * PRICES.creamPrice;

  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { isPending, mutate } = useMutation(
    {
      mutationFn: () => {
        setDisplayInputBox(false);
        updateField('bill', newValue, id);
      },
      onSuccess: () => {
        toast.success('Успешно промењено поље рачуна');
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
          defaultValue={price}
          placeholder={price}
          type="number"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={() => {
            mutate(newValue, id);
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
