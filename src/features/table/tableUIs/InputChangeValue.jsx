import React, { useState } from 'react';

import styled from 'styled-components';

import { setNewValue } from '../../../features/delivery/customersSlice';
import { useForm } from 'react-hook-form';

const StyledInput = styled.input`
  background-color: var(--color-silver-100/20);
  opacity: 20;
  color: var(--color-silver-700);
  width: inherit;
`;
function InputChangeValue({
  type,
  placeholder,
  defaultValue,
  onSubmit,
  onBlur,
  cellWidth,
}) {
  const [newValue, setNewValue] = useState('');
  const showForTrad = cellWidth === 'tr';

  if (type === 'checkbox')
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '5rem',
          height: '12rem',
          backgroundColor: 'var(--color-blue-700)',
          color: 'var(--color-blue-100)',
        }}
        onBlur={onBlur}
        onSubmit={onSubmit}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <StyledInput
            style={{ width: '1.5rem', height: 'fit-content' }}
            onChange={(e) => {
              onSubmit(e.target.value);
            }}
            type={type}
            id='0.5kg'
            name='0.5kg'
            value='0.5kg'
          ></StyledInput>
          <label htmlFor='0.5kg'>0.5</label>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <StyledInput
            style={{ width: '1.5rem', height: 'fit-content' }}
            onChange={(e) => {
              onSubmit(e.target.value);
            }}
            type={type}
            id='kg'
            name='kg'
            value='kg'
          ></StyledInput>
          <label htmlFor='kg'>kg</label>
        </div>

        <div
          style={{
            display: showForTrad ? 'none' : 'flex',
            flexDirection: 'row',
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <StyledInput
            style={{ width: '1.5rem', height: 'fit-content' }}
            onChange={(e) => {
              onSubmit(e.target.value);
            }}
            type={type}
            id='ком'
            name='ком'
            value='ком'
          ></StyledInput>
          <label htmlFor='ком'>ком</label>
        </div>
      </form>
    );
  if (type === 'time')
    return (
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '5rem',
          height: '1.5rem',
          backgroundColor: 'var(--color-yellow-700)',
          color: 'var(--color-yellow-100)',
        }}
      >
        <StyledInput
          onBlur={onBlur}
          style={{ width: 'fit-content', height: 'fit-content' }}
          type={type}
          autoFocus
          onChange={(e) => {
            setNewValue(e.target.value);
            onSubmit(e.target.value);
          }}
        ></StyledInput>
      </form>
    );
  return (
    <form
      style={{ width: cellWidth }}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newValue);
      }}
    >
      <StyledInput
        autoFocus
        onChange={(e) => {
          setNewValue(e.target.value);
        }}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
      ></StyledInput>
    </form>
  );
}

export default InputChangeValue;
