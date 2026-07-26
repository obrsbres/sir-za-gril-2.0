import { useQuery } from '@tanstack/react-query';
import { getSpecificDelivery } from '../../services/apiDeliveries';
export function useSpecificDelivery({ deliveryId }) {
  const {
    isPending,
    data: delivery,
    error,
  } = useQuery({
    queryKey: ['current_delivery'],
    queryFn: () => getSpecificDelivery({ deliveryId }),
  });

  return { isPending, error, delivery };
}
