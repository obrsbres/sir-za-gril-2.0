import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { deleteDelivery as deleteDeliveryApi } from '../../services/apiDeliveriesInfo';

export function useDeleteDelivery() {
  const queryClient = useQueryClient();

  const { mutate: deleteDelivery, isLoading: isDeleting } = useMutation({
    mutationFn: deleteDeliveryApi,
    onSuccess: () => {
      toast.success('Достава обрисана');
      queryClient.invalidateQueries({ queryKey: ['deliveries'] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteDelivery };
}
