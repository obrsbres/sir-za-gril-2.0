import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { createDelivery as createDeliveryApi } from '../../services/apiDeliveriesInfo';

export function useCreateDelivery() {
  const queryClient = useQueryClient();

  const { mutate: createDelivery, isLoading: isCreating } = useMutation({
    mutationFn: createDeliveryApi,
    onSuccess: () => {
      toast.success('Нова достава успешно креирана');
      queryClient.invalidateQueries({ queryKey: ['deliveries'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isCreating, createDelivery };
}
