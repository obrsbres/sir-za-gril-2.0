import { useQuery } from '@tanstack/react-query';
import { getDeliveriesInfo } from '../../services/apiDeliveriesInfo';

export function useDeliveriesInfo() {
  const {
    isPending,
    data: deliveries,
    error,
  } = useQuery({
    queryKey: ['deliveries'],
    queryFn: getDeliveriesInfo,
  });

  console.log('deliveries', deliveries);
  return { isPending, error, deliveries };
}
