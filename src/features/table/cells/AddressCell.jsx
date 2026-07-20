import { useState } from 'react';

import styled from 'styled-components';

import { useHotkey } from '@tanstack/react-hotkeys';

import { useQueryClient } from '@tanstack/react-query';

import InputChangeValue from '../tableUIs/InputChangeValue';

import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';

const StyledAddressCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-wrap: balance;
`;
function AddressCell({ id, customerAddress }) {
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });

  return (
    <StyledAddressCell
      tabIndex="0"
      onClick={() => {
        setDisplayInputBox(true);
      }}
    >
      {displayInputBox && !isPending ? (
        <InputChangeValue
          placeholder={customerAddress}
          type="text"
          onBlur={() => setDisplayInputBox(false)}
          onSubmit={(newValue) => {
            mutate({
              column: 'customer_address',
              columnValue: newValue,
              id: id,
            });
            setDisplayInputBox();
          }}
          cellWidth="13rem"
        />
      ) : (
        customerAddress
      )}
    </StyledAddressCell>
  );
}

export default AddressCell;
