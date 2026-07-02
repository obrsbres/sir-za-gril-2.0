import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getDeliveries } from '../services/apiDeliveries';

function Delivery() {
  const { data } = useQuery({
    queryKey: ['current_delivery'],
    queryFn: getDeliveries,
  });
  console.log(data);
  return <div></div>;
}

export default Delivery;
