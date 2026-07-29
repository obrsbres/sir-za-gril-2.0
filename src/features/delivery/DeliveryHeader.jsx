import styled from 'styled-components';

import Heading from '../../ui/Heading';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDeliveriesInfo } from '../deliveries/useDeliveriesInfo';

import { formatDate } from '../../utils/helpers';

import NewCustomerForm from './NewCustomerForm';
import ButtonGroup from '../../ui/ButtonGroup';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

const StyledHeader = styled.header`
  color: var(--color-indigo-700);
  background-color: var(--color-blue-100);
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  gap: 10%;
`;
const StyledHeading = styled.h1`
  width: 50%;
  font-size: 3rem;
  font-weight: 600;
  z-index: 1000;
  span {
    color: var(--color-red-700);
    font-style: italic;
  }
`;

function DeliveryHeader() {
  const { deliveries, isPending } = useDeliveriesInfo();
  const [searchParams] = useSearchParams();

  const deliveryId = searchParams.get('sortBy') || 1;
  if (!deliveries || !deliveryId) return;

  const currentDelivery = deliveries.find(
    (delivery) => delivery.id_of_delivery === Number(deliveryId),
  );
  const dateOfDelivery = currentDelivery.delvery_start_day;

  return (
    <StyledHeader>
      <StyledHeading>
        Преглед доставе за <span>{formatDate(dateOfDelivery)}</span>
      </StyledHeading>
      <ButtonGroup>
        <Modal>
          <Modal.Open opens='NewCustomerForm'>
            <Button $size='small'>Додај купца</Button>
          </Modal.Open>
          <Modal.Window name='NewCustomerForm'>
            <NewCustomerForm
              currentDelivery={currentDelivery}
              deliveryId={deliveryId}
            />
          </Modal.Window>
        </Modal>
      </ButtonGroup>
    </StyledHeader>
  );
}

export default DeliveryHeader;
