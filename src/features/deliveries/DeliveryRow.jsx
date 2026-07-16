import { format } from 'date-fns';
import { sr } from 'date-fns/locale/sr';
import styled from 'styled-components';

import { formatCurrency } from '../../utils/helpers';

import { HiPencil, HiSquare2Stack, HiTrash } from 'react-icons/hi2';

import Modal from '../../ui/Modal';
import CreateDeliveryForm from './CreateDeliveryForm';
import ConfirmDelete from '../../ui/ConfirmDelete';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';

import { useCreateDelivery } from './useCreateDelivery';
import { useDeleteDelivery } from './useDeleteDelivery';
import { formatDate } from '../../utils/helpers';

const DeliveryId = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: 'Sono';
  display: flex;
  justify-content: center;
`;

const Price = styled.div`
  font-family: 'Sono';
  font-weight: 600;
  width: fit-content;
  display: flex;
  justify-content: center;
`;

const Discount = styled.div`
  font-family: 'Sono';
  font-weight: 500;
  color: var(--color-green-700);
  display: flex;
  justify-content: center;
`;

function DeliveryRow({ delivery, numOfDeliveries }) {
  const { isDeleting, deleteDelivery } = useDeleteDelivery();
  const { isCreating, createDelivery } = useCreateDelivery();

  const {
    id_of_delivery: id,
    delivery_end_day: endDay,
    delvery_start_day: startDay,
    num_of_customers: numOfCustomers,
  } = delivery;

  const data = {
    endDay,
    startDay,
    numOfCustomers,
  };
  function handleDuplicate() {
    createDelivery({ numOfDeliveries, data });
  }

  return (
    <>
      <Table.Row role='row'>
        <DeliveryId> Д-{String(id).slice(-3)}</DeliveryId>
        <div>
          {numOfCustomers ? `Укупно ${numOfCustomers} локација` : 'Непознато'}
        </div>
        <Price>{formatCurrency(numOfCustomers * 300, 'rsd')}</Price>
        <Price>{formatDate(startDay, 'long')}</Price>
        <Price>{formatDate(endDay, 'long')}</Price>

        <div>
          <Modal>
            <Menus>
              <Menus.Menu>
                <Menus.Toggle id={id} />
                <Menus.List id={id}>
                  <Menus.Button
                    disabled={isCreating}
                    onClick={handleDuplicate}
                    icon={<HiSquare2Stack />}
                  >
                    Duplicate
                  </Menus.Button>

                  <Modal.Open opens='edit-form'>
                    <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
                  </Modal.Open>

                  <Modal.Open opens='delete-confirmation'>
                    <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                  </Modal.Open>
                </Menus.List>

                <Modal.Window name='edit-form'>
                  <CreateDeliveryForm id={id} oldData={data} />
                </Modal.Window>

                <Modal.Window name='delete-confirmation'>
                  <ConfirmDelete
                    resource='delivery'
                    onConfirm={() => {
                      deleteDelivery({ id });
                    }}
                    disabled={isDeleting}
                  />
                </Modal.Window>
              </Menus.Menu>
            </Menus>
          </Modal>
        </div>
      </Table.Row>
    </>
  );
}

export default DeliveryRow;
