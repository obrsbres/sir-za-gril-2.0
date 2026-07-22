import React from 'react';

import { useQuery } from '@tanstack/react-query';

import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import CreateDeliveryForm from '../features/deliveries/CreateDeliveryForm';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import DeliveryRow from '../features/deliveries/DeliveryRow';
import Table from '../ui/Table';

import { useDeliveriesInfo } from '../features/deliveries/useDeliveriesInfo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70vw;
  height: 100vh;
  color: #ddd888;
`;

const DeliveriesList = styled.ul`
  width: fill-available;
  height: 50vh;
  overflow-y: auto;
  overflow-x: auto;
`;

function Delivery({ defaultState = 'delivery-form' }) {
  const { deliveries, isPending } = useDeliveriesInfo();

  if (isPending) return <Spinner />;
  if (!deliveries) return;
  return (
    <Container>
      <Table
        style={{ width: 'fillAvailable' }}
        $columns='2fr 1.8fr 2.2fr 3fr 3fr 1fr'
      >
        <Table.Header>
          <div>Ид доставе</div>
          <div>Број локација </div>
          <div>Укупна цена</div>
          <div>Дан почетка</div>
          <div>Последњи дан</div>
          <div></div>
        </Table.Header>
      </Table>
      <DeliveriesList>
        <Table $columns='2fr 1.8fr 2.2fr 3fr 3fr 1fr'>
          <Table.Body
            data={deliveries}
            render={(delivery) => (
              <DeliveryRow
                as='row'
                key={delivery.id_of_delivery}
                delivery={delivery}
                numOfDeliveries={deliveries.length}
              />
            )}
          />
        </Table>
      </DeliveriesList>

      <Modal defaultState={defaultState}>
        <Modal.Open opens='delivery-form'>
          <Button $variation='primary'>Додај нову доставу</Button>
        </Modal.Open>
        <Modal.Window name='delivery-form'>
          <CreateDeliveryForm numOfDeliveries={deliveries.length} />
        </Modal.Window>
      </Modal>
    </Container>
  );
}

export default Delivery;
