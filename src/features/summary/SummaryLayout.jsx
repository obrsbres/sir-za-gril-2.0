import { useSearchParams } from 'react-router-dom';
import { useSpecificDelivery } from './useSpecificDelivery';
function SummaryLayout() {
  const [searchParams, setSearchParams] = useSearchParams();
  const deliveryId = searchParams.get('sortBy') || '';

  const { isPending, delivery } = useSpecificDelivery(deliveryId);
  if (!delivery) return;

  if (!isPending) console.log(delivery);

  return <div></div>;
}

export default SummaryLayout;
