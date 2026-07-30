import { useState } from 'react';

import styled from 'styled-components';

import { useHotkey } from '@tanstack/react-hotkeys';

import { useQueryClient } from '@tanstack/react-query';

import InputChangeValue from '../tableUIs/InputChangeValue';

import { useUpdateDelivery } from '../../deliveries/useUpdateDelivery';
import { HiMapPin } from 'react-icons/hi2';

const StyledAddressCell = styled.td`
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-silver-700);
  border-radius: 2px;
  border-collapse: collapse;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  word-wrap: balance;
`;

const StyledAddress = styled.div`
  font-size: small;
  border-right: solid 1px var(--color-red-800);
`;
const StyledLinkToAddr = styled.button`
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  transition: all 0.5s;
  color: var(--color-indigo-800);
`;
function AddressCell({ id, customerAddress }) {
  const [displayInputBox, setDisplayInputBox] = useState(false);

  const queryClient = useQueryClient();

  const { mutate, isPending } = useUpdateDelivery();

  useHotkey('esc', () => setDisplayInputBox(false), {
    conflictBehavior: 'allow',
  });

  // function openMapAddress(address) {
  //   const encodedAddress = encodeURIComponent(address);
  //   const mapUrl = `https://google.com{encodedAddress}`;
  //   window.open(mapUrl, '_blank');
  // }
  const link = `openMapAddress('${customerAddress}, Beograd 11000, Serbia')`;
  return (
    <StyledAddressCell tabIndex='0'>
      <StyledAddress
        onClick={() => {
          setDisplayInputBox(true);
        }}
      >
        {displayInputBox && !isPending ? (
          <InputChangeValue
            placeholder={customerAddress}
            type='text'
            onBlur={() => setDisplayInputBox(false)}
            onSubmit={(newValue) => {
              mutate({
                column: 'customer_address',
                columnValue: newValue,
                id: id,
              });
              setDisplayInputBox();
            }}
            cellWidth='13rem'
          />
        ) : (
          customerAddress
        )}
      </StyledAddress>
      <StyledLinkToAddr
        onClick={() => {
          const address = `${customerAddress}, Beograd 11000, Serbia`;
          const encoded = encodeURIComponent(address);

          // Check if the user is on iOS, Android mobile, or Desktop
          const ua = navigator.userAgent;
          const isIOS = /iPad|iPhone|iPod/.test(ua);
          const isAndroid = /Android/.test(ua);

          let url;
          if (isIOS) {
            url = `maps://?q=${encoded}`;
          } else if (isAndroid) {
            url = `geo:0,0?q=${encoded}`;
          } else {
            // Desktop or fallback: Universal Google Maps URL
            url = `https://google.com{encoded}`;
          }

          // For desktop/fallback, open a new tab; for native schemes, redirect location
          if (!isIOS && !isAndroid) {
            window.open(url, '_blank');
          } else {
            window.location.href = url;
          }
        }}
      >
        <HiMapPin />
      </StyledLinkToAddr>
    </StyledAddressCell>
  );
}

export default AddressCell;
