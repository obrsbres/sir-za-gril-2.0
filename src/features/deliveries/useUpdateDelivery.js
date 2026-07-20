import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateDelivery as updateDeliveryApi } from '../../services/apiDeliveriesInfo';

export function useUpdateDelivery() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    // mutationFn: updateDeliveryApi,
    // onSuccess: () => {
    //   toast.success('Нова достава успешно измењена');
    //   queryClient.invalidateQueries({ queryKey: ['deliveries'] });
    // },
    // onError: (err) => toast.error(err.message),

    mutationFn: ({ column, columnValue, id }) =>
      updateDeliveryApi(column, columnValue, id),

    onMutate: async ({ column, columnValue, id }) => {
      await queryClient.cancelQueries({ queryKey: ['current_delivery'] });
      console.log(column, columnValue, id);
      const previousDatas = queryClient.getQueryData(['current_delivery']);

      queryClient.setQueryData(['current_delivery'], (old) => {
        let printData = [
          ...old,
          (old.find((oldic) => oldic.customer_id === id)[column] = columnValue),
        ];
        [
          ...old,
          (old.find((oldic) => oldic.customer_id === id).column = columnValue),
        ];
        console.log(old, printData);
      });

      return { previousDatas };
    },

    onError: (err) => toast.error(err.message),

    onSuccess: () => {
      toast.success('Нова достава успешно измењена');
      queryClient.invalidateQueries({ queryKey: ['current_delivery'] });
    },
  });

  return { isPending, mutate };
}
