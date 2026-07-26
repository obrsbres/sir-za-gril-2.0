import styled from 'styled-components';

import DeliveryLayout from '../features/delivery/DeliveryLayout';
import DeliveryHeader from '../features/delivery/DeliveryHeader';
const StyledCustomerData = styled.div`
  display: flex;
  height: 94vh;
  width: 100vw;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: var(--color-brand-100);
`;
function CustomersData() {
  return (
    <StyledCustomerData>
      <DeliveryHeader />
      <DeliveryLayout />
    </StyledCustomerData>
  );
}

export default CustomersData;
