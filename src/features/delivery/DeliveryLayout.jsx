import { useQuery } from '@tanstack/react-query';
import { useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';

import styled from 'styled-components';

import Table from '../table/Table';
import Row from '../table/Row';
import Thead from '../table/Thead';
import Tbody from '../table/Tbody';
import Tfoot from '../table/Tfoot';
import InputForm from '../table/tableUIs/InputForm';
import Spinner from '../../ui/Spinner';

import { show } from '../customer/customerSlice';
import { tableExplanation } from '../../utils/tableExplanation';
import useScreenWidth from '../../hooks/useScreenWidth';
import { useDeliveries } from '../delivery/useDeliveries';

const Container = styled.div`
  background-color: var(--color-brand-100);
  border: 1px solid var(--color-brand-600);
  border-radius: 4px;
  margin: ${(props) =>
    props.$pageSize === 'mobile' ? '1px 1px 1px ' : '1rem 0.5rem 1rem'};
  width: fit-content;
  height: auto;
  display: ${(props) =>
    props.$pageSize === 'mobile' || !props.children.length ? 'flex' : 'grid'};
  flex-direction: column;
  grid-template-columns: 1fr 30rem;
  grid-template-rows: auto auto;
  justify-content: space-evenly;
  align-items: space-evenly;
`;
const ImgBox = styled.div`
  background-color: var(--color-brand-100);
  display: flex;
  justify-content: center;
  align-items: space-evenly;
  flex-direction: column;
  width: fill-available;
  height: fill-available;
`;

const ImgSpining = styled.img`
  grid-row: 1/-1;
  grid-column: 2;
  align-self: center;
  justify-self: center;
  width: 200px;
  height: 200px;
  animation: spin 5s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const TextBox = styled.div`
  width: ${(props) => (props.$pageSize === 'mobile' ? '37rem' : '141rem')};
  /* margin: ${(props) =>
    props.$pageSize === 'mobile' ? '1px 1px 1px ' : '4rem 2rem 4rem'}; */
  padding: ${(props) =>
    props.$pageSize === 'mobile' ? '1px 1px 1px ' : '4rem 2rem 4rem'};
  text-align: center;
  background-color: var(--color-yellow-100);
  border: 1px solid var(--color-yellow-700);
  border-radius: 6px;
  font-size: 1.5rem;
  font-weight: bold;
`;
const P = styled.p`
  padding: 2px 4px 2px 0px;
  margin: 2px 4px 2px 0px;
`;

function DeliveryLayout() {
  const pageSize = useScreenWidth();
  const isNotMobile = pageSize !== 'mobile';

  const showInputForm = useSelector((state) => state.inputForm.showInputForm);
  show();

  const [searchParams] = useSearchParams();
  const deliveryId = searchParams.get('sortBy') || '1';

  const { isPending, error, deliveries } = useDeliveries();

  if (!deliveries) return;

  if (isPending) return <Spinner />;

  const deliveryData = deliveries.filter(
    (delivery) => delivery.id_of_delivery === Number(deliveryId),
  );
  const customers = [...deliveryData].sort(
    (custA, custB) => custA.num_in_delivery - custB.num_in_delivery,
  );

  const numberOfCustomers = customers.length;

  return (
    <>
      <Container $pageSize={pageSize}>
        {showInputForm && isNotMobile && (
          <InputForm
            style={{ gridRow: 1, gridColumn: 1 }}
            numberOfCustomers={numberOfCustomers}
            deliveryId={deliveryId}
          />
        )}
        <Table style={{ gridRow: 2, gridColumn: 1 }}>
          <Thead>
            <Row type='head' />
          </Thead>
          <Tbody>
            {customers.map((customer) => (
              <Row
                type='body'
                customer={customer}
                numOfDeliveries={customers.length}
                key={customer.customer_id}
              />
            ))}
          </Tbody>
          <Tfoot>
            <Row type='foot' numOfDeliveries={customers.length} />
          </Tfoot>
        </Table>
        {isNotMobile && <ImgSpining src='/spinner.png' alt='spinning-cheese' />}
      </Container>
      <Container
        style={{
          backgroundColor: 'var(--color-indigo-100)',
        }}
      >
        <TextBox $pageSize={pageSize}>
          <P>{tableExplanation}</P>
        </TextBox>
      </Container>
    </>
  );
}
export default DeliveryLayout;
