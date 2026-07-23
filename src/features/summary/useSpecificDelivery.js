import { useQuery } from '@tanstack/react-query';
import { getSpecificDelivery } from '../../services/apiDeliveries';

export function useSpecificDelivery() {
  const {
    isPending,
    data: delivery,
    error,
  } = useQuery({
    queryFn: (deliveryId) => getSpecificDelivery(deliveryId),
    queryKey: ['current_delivery', 'sortBy'],
  });

  return { isPending, error, delivery };
}
