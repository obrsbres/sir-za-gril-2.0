import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { updateDelivery as updateDeliveryApi } from '../../services/apiDeliveriesInfo';

export function useUpdateDelivery() {
  const queryClient = useQueryClient();

  const { mutate: updateDelivery, isLoading: isUpdating } = useMutation({
    mutationFn: updateDeliveryApi,
    onSuccess: () => {
      toast.success('Нова достава успешно измењена');
      queryClient.invalidateQueries({ queryKey: ['deliveries'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateDelivery };
}
