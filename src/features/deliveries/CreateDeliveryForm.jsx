import { useForm } from 'react-hook-form';

import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import FormRow from '../../ui/FormRow';

import { useCreateDelivery } from './useCreateDelivery';
import { useUpdateDelivery } from './useUpdateDelivery';

function CreateDeliveryForm({
  numOfDeliveries,
  onClose: onCloseModal,
  id,
  oldData,
}) {
  const { isCreating, createDelivery } = useCreateDelivery();
  const { isUpdating, updateDelivery } = useUpdateDelivery();
  const isPending = isCreating || isUpdating;
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    if (id)
      updateDelivery(
        { id, data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    if (!id)
      createDelivery(
        { numOfDeliveries, data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
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
      <FormRow label="Датум почетка доставе" error={errors?.startDay?.message}>
        <Input
          type="date"
          id="startDay"
          disabled={isPending}
          placeholder={oldData?.startDay}
          {...register('startDay', {
            required: 'Поље је обавезно',
          })}
        />
      </FormRow>

      <FormRow label="Датум завршетка доставе" error={errors?.endDay?.message}>
        <Input
          type="date"
          id="endDay"
          disabled={isPending}
          placeholder={oldData?.endDay}
          {...register('endDay', {
            required: 'Поље је обавезно',
          })}
        />
      </FormRow>

      <FormRow
        label="Оквиран број достава"
        error={errors?.numOfCustomers?.message}
      >
        <Input
          type="number"
          id="numOfCustomers"
          disabled={isPending}
          placeholder={oldData?.numOfCustomers}
          {...register('numOfCustomers', {
            required: 'Поље је обавезно',
            min: {
              value: 1,
              message: 'Број треба бити најмање 1',
            },
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Одустани
        </Button>
        <Button disabled={isPending}>
          {id ? 'Измени' : 'Направи'} доставу
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateDeliveryForm;
