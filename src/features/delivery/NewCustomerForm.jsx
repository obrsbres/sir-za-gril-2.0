import { useSearchParams } from 'react-router-dom';

import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useCreateCustomer } from './useCreateCustomer';
import { useSpecificDelivery } from '../summary/useSpecificDelivery';

function NewCustomerForm({
  currentDelivery,
  onClose: onCloseModal,
  deliveryId,
}) {
  const { isCreating, createCustomer } = useCreateCustomer();
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const { delivery } = useSpecificDelivery({ deliveryId });
  if (!delivery) return;
  console.log(delivery, isCreating);
  const currentRow = delivery?.length;
  function onSubmit(data) {
    createCustomer(
      { currentRow, data, deliveryId },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      },
    );
  }

  function onError(errors) {
    console.error(errors);
  }

  return (
    <Form
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? 'modal' : 'regular'}
    >
      <FormRow label='Име купца' error={errors?.name?.message}>
        <Input
          id='name'
          key='name'
          type='text'
          {...register('name', {
            required: 'Име је обавезно',
          })}
          placeholder='Унеси име купца'
        />
      </FormRow>

      <FormRow label='Количина грила' error={errors?.gril?.message}>
        <Input
          id='gril'
          key='gril'
          type='number'
          {...register('gril', {
            min: { value: 0, message: 'Количина грила не може бити негативна' },
          })}
          disabled={isCreating}
          placeholder='Унеси количину  у килограмима'
          {...register('gril', {
            required: 'Поље је обавезно',
          })}
        />
      </FormRow>

      <FormRow label='Количина ситног' error={errors?.trad?.message}>
        <Input
          id='trad'
          key='trad'
          type='number'
          disabled={isCreating}
          placeholder='Унеси количину у килограмима'
          {...register('trad', {
            min: {
              value: 0,
              message: 'Количина ситног не може бити негативна',
            },
          })}
        />
      </FormRow>
      <FormRow label='Количина уваре' error={errors?.cream?.message}>
        <Input
          id='cream'
          key='cream'
          type='number'
          disabled={isCreating}
          placeholder='Унеси количину у килограмима'
          {...register('cream', {
            min: {
              value: 0,
              message: 'Количина уваре не може бити негативна',
            },
          })}
        />
      </FormRow>

      <FormRow label='Адреса купца' error={errors?.add?.message}>
        <Input
          id='add'
          key='add'
          type='text'
          disabled={isCreating}
          placeholder='Унеси адресу купца'
          {...register('add', {
            required: 'Поље је обавезно',
          })}
        />
      </FormRow>

      <FormRow label='Контакт телефон' error={errors?.tel?.message}>
        <Input
          id='tel'
          key='tel'
          type='telephone'
          disabled={isCreating}
          placeholder='Унеси телефон'
          {...register('tel', {
            required: 'Обавезан телефон',
            pattern: {
              value: /^06\d{7,8}$/,
              message:
                'Формат телефона 0641234567 мора почети са 06 и мора имати 9 или 10 цифара',
            },
          })}
        />
      </FormRow>

      <FormRow label='Време доставе' error={errors?.time?.message}>
        <Input
          id='time'
          key='time'
          type='time'
          disabled={isCreating}
          placeholder='19:00'
          defaultValue='19:00'
          lang='us'
          step='900'
          min='15:00'
          max='23:00'
          {...register('time')}
        />
      </FormRow>

      <FormRow label='Напомена' error={errors?.note?.message}>
        <Input
          id='note'
          key='note'
          type='text'
          disabled={isCreating}
          placeholder='Не реди интерфон, позвати раније...'
          {...register('note')}
        />
      </FormRow>

      <FormRow label='Другачија цена' error={errors?.price?.message}>
        <Input
          id='price'
          key='price'
          type='number'
          step='50'
          disabled={isCreating}
          placeholder='Унеси другачију цену '
          {...register('price')}
        />
      </FormRow>
      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          $variation='secondary'
          type='reset'
          onClick={() => onCloseModal?.()}
        >
          Одустани
        </Button>
        <Button disabled={isCreating}>Додај</Button>
      </FormRow>
    </Form>
  );
}
export default NewCustomerForm;
