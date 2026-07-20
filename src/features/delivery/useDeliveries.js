import { useQuery } from '@tanstack/react-query';
import { getDeliveries } from '../../services/apiDeliveries';

export function useDeliveries() {
  const {
    isPending,
    data: deliveries,
    error,
  } = useQuery({
    queryKey: ['current_delivery'],
    queryFn: getDeliveries,
    staleTime: 100,
  });

  return { isPending, error, deliveries };
}
