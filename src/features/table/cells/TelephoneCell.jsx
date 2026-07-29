import { useState } from 'react';

import { useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';

import { useHotkey } from '@tanstack/react-hotkeys';

import InputChangeValue from '../tableUIs/InputChangeValue';
import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';
import { HiPhoneArrowUpRight, HiPhoneXMark } from 'react-icons/hi2';
import { HiPhone } from 'react-icons/hi';

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
const StyledTelephoneNumber = styled.div`
  font-size: small;
  border-right: solid 1px var(--color-red-800);
`;
const StyledLinkToPhone = styled.button`
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  transition: all 0.5s;
  color: var(--color-indigo-800);
`;
function TelephoneCell({ id, customerTelephone }) {
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });

  return (
    <StyledCell tabIndex='0'>
      <StyledTelephoneNumber
        onClick={() => {
          setDisplayInputBox(true);
        }}
      >
        {displayInputBox && !isPending ? (
          <InputChangeValue
            type='text'
            onSubmit={(newValue) => {
              mutate({
                column: 'customer_telephone',
                columnValue: newValue,
                id: id,
              });
              setDisplayInputBox(false);
            }}
            cellWidth='13rem'
          />
        ) : (
          customerTelephone
        )}
      </StyledTelephoneNumber>
      <StyledLinkToPhone
        onClick={() => {
          window.location.href = `tel:${customerTelephone}`;
        }}
      >
        <HiPhone />
      </StyledLinkToPhone>
    </StyledCell>
  );
}

export default TelephoneCell;
