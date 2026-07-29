import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import styled, { css } from 'styled-components';

import NewRowButton from './NewRowButton';
import Error from '../../../ui/Error';

import { hide } from '../../delivery/showFormSlice';
import { useDispatch } from 'react-redux';
import { useHotkey } from '@tanstack/react-hotkeys';
import { insertRow } from '../../../services/apiDeliveries';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const Container = styled.div`
  height: 7rem;
  display: grid;
  grid-template-columns: 0.5 fr;
  grid-template-rows: 0.5 1fr;
`;
export const ErrorContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
`;
const StyledInputFormRow = styled.form`
  width: fit-content;
  height: 3.5 rem;
  display: grid;
  grid-template-columns: 3rem 20rem 8rem 8rem 7rem 15rem 11rem 10rem 20rem 6rem 3rem;
  grid-template-rows: 1rem;
  color: var(--color-blue-700);
  background-color: var(--color-red-100);
  border: 1px solid var(--color-red-700);
  position: relative;
`;
const StyledInputFormCell = styled.input`
  height: 1.5 rem;
  border-style: solid;
  border-width: 1px;
  border-color: var(--color-blue-700);
  border-radius: 2px;
  border-collapse: collapse;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  word-wrap: balance;
  padding: 10px;
  border: 1px solid #ccc;
  width: 100%;
`;

const Label = styled.label`
  position: relative;
  top: 5px; /* Pomera label na gornju ivicu */
  left: 0px;
  padding: 0 5px;
  font-size: 12px;
  height: 1.5rem;
  color: var(--color-red-700);
  border-bottom: 1px solid var(--color-red-700);
  border-radius: 3px;
  background-color: var(--color-blue-100);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function InputForm({ numberOfCustomers, deliveryId }) {
  const { register, handleSubmit, formState, reset } = useForm();
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  console.log(deliveryId);
  function onSubmit(data) {
    mutate(data);
    reset();
    dispatch(hide());
  }
  const { mutate } = useMutation(
    {
      mutationFn: (data) => {
        insertRow(numberOfCustomers, data, deliveryId);
      },
      onSuccess: () => toast.success('Успешно додат купац'),
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    }),
  );

  function onError(errors) {
    const { gril } = errors;
    console.log(errors[0], gril);
  }
  useHotkey('Enter', handleSubmit(onSubmit), {
    conflictBehavior: 'allow',
  });

  const { errors } = formState;
  return (
    <Container>
      {errors?.name?.message && <Error>{errors.name.message}</Error>}
      {errors?.gril?.message && <Error>{errors.gril.message}</Error>}
      {errors?.trad?.message && <Error>{errors.trad.message}</Error>}
      {errors?.cream?.message && <Error>{errors.cream.message}</Error>}
      {errors?.add?.message && <Error>{errors.add.message}</Error>}
      {errors?.tel?.message && <Error>{errors.tel.message}</Error>}
      {errors?.time?.message && <Error>{errors.time.message}</Error>}
      {errors?.note?.message && <Error>{errors.note.message}</Error>}
      {errors?.price?.message && <Error>{errors.price.message}</Error>}
      <StyledInputFormRow onSubmit={handleSubmit(onSubmit, onError)}>
        <Label htmlFor='id'>рб</Label>
        <Label htmlFor='name'>Име и презиме</Label>
        <Label htmlFor='gril'>Грил</Label>
        <Label htmlFor='trad'>Ситан</Label>
        <Label htmlFor='cream'>Увара</Label>
        <Label htmlFor='add'>Адреса</Label>
        <Label htmlFor='tel'>Телефон</Label>
        <Label htmlFor='time'>Време</Label>
        <Label htmlFor='note'>Напомена</Label>
        <Label htmlFor='price'>Цена</Label>
        <Label htmlFor='button'>
          <div
            style={{
              display: 'flex',
              width: '3rem',
              alignSelf: 'center',
              justifyContent: 'center',
            }}
            onClick={() => dispatch(hide())}
          >
            ❌;
          </div>
        </Label>
        <StyledInputFormCell
          key='id'
          id='id'
          type='number'
          {...register('id')}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='name'
          key='name'
          type='text'
          {...register('name', {
            required: 'Име је обавезно',
          })}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='gril'
          key='gril'
          type='number'
          {...register('gril', {
            min: { value: 0, message: 'Количина грила не може бити негативна' },
          })}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='trad'
          key='trad'
          type='number'
          {...register('trad', {
            min: {
              value: 0,
              message: 'Количина ситног не може бити негативна',
            },
          })}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='cream'
          key='cream'
          type='number'
          {...register('cream', {
            min: { value: 0, message: 'Количина уваре не може бити негативна' },
          })}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='add'
          key='add'
          type='text'
          {...register('add', { required: 'Адеса је обавезна' })}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='tel'
          placeholder='06xxxxxxxx'
          key='tel'
          type='telephone'
          {...register('tel', {
            required: 'Обавезан телефон',
            pattern: {
              value: /^06\d{7,8}$/,
              message:
                'Формат телефона 0641234567 мора почети са 06 и мора имати 9 или 10 цифара',
            },
          })}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='time'
          key='time'
          type='time'
          lang='us'
          step='900'
          min='15:00'
          max='23:00'
          {...register('time')}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='note'
          key='note'
          type='text'
          {...register('note')}
        ></StyledInputFormCell>
        <StyledInputFormCell
          id='price'
          key='price'
          type='number'
          {...register('price')}
        ></StyledInputFormCell>
        <NewRowButton
          type='submit'
          // onClick={(e) => {
          //   e.preventDefault();
          //   handleSubmit(onSubmit);
          //   // dispatch(hide());
          // }}
        >
          ✔️
        </NewRowButton>
      </StyledInputFormRow>
    </Container>
  );
}

export default InputForm;
