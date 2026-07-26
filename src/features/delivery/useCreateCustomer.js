import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { insertRow as createCustomerApi } from '../../services/apiDeliveries';

export function useCreateCustomer() {
  const queryClient = useQueryClient();

  const { mutate: createCustomer, isPending: isCreating } = useMutation({
    mutationFn: ({ currentRow, data, deliveryId }) =>
      createCustomerApi(currentRow, data, deliveryId),
    onSuccess: () => {
      toast.success('Успешно додат нови купац');
      queryClient.invalidateQueries({ queryKey: ['current_delivery'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createCustomer };
}
