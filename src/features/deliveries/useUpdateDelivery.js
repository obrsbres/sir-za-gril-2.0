import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateField as updateFieldApi } from '../../services/apiDeliveries';

export function useUpdateDelivery() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ column, columnValue, id }) =>
      updateFieldApi({ column, columnValue, id }),

    onMutate: async ({ column, columnValue, id }) => {
      await queryClient.cancelQueries({ queryKey: ['current_delivery'] });
      const previousDatas = queryClient.getQueryData(['current_delivery']);

      queryClient.setQueryData(['current_delivery'], (old) => {
        const newData = old.map(
          (oldic) =>
            (oldic =
              oldic.customer_id === id
                ? { ...oldic, [column]: columnValue }
                : oldic)
        );
        return newData;
      });

      return { previousDatas };
    },

    onError: (err) => toast.error(err.message),

    onSettled: () => {
      toast.success('Нова достава успешно измењена');
      queryClient.invalidateQueries({ queryKey: ['current_delivery'] });
    },
  });

  return { isPending, mutate };
}
