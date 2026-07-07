// import styled from 'styled-components';
import React from 'react';
import Table from '../features/table/Table';
import Row from '../features/table/Row';
import Thead from '../features/table/Thead';
import Tbody from '../features/table/Tbody';
import Tfoot from '../features/table/Tfoot';
import { useQuery } from '@tanstack/react-query';
import { getDeliveries } from '../services/apiDeliveries';
import { useSelector } from 'react-redux';
import InputForm from '../features/table/tableUIs/InputForm';
import styled from 'styled-components';
import { show } from '../features/customer/customerSlice';
import { tableExplanation } from '../utils/tableExplanation';

const Container = styled.div`
  background-color: var(--color-brand-100);
  border: 1px solid var(--color-brand-600);
  border-radius: 10px;
  margin: 2rem 4rem 2rem 4rem;
  width: 90vw;
  height: auto;
  padding: 2rem 4rem 2rem 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
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
  width: 200px;
  height: 200px;
  /* Applies the custom keyframe animation */
  animation: spin 5s linear infinite;

  /* Defines the rotation sequence */
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
  width: 80vw;
  padding-top: 2rem;
  padding-bottom: 2rem;
  text-align: center;
  background-color: var(--color-yellow-100);
  border: 1px solid var(--color-yellow-700);
  border-radius: 10px;
  gap: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`;

function CustomersData() {
  const showInputForm = useSelector((state) => state.inputForm.showInputForm);
  show();
  const { data } = useQuery({
    queryKey: ['current_delivery'],
    queryFn: getDeliveries,
  });

  if (!data) return;
  const customers = [...data].sort(
    (custA, custB) => custA.num_in_delivery - custB.num_in_delivery,
  );
  const numberOfCustomers = customers.length;
  return (
    <>
      <Container>
        {showInputForm && <InputForm numberOfCustomers={numberOfCustomers} />}
        <Table>
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
        <ImgSpining src='./../public/spinner.png' alt='spinning-cheese' />
      </Container>
      <Container
        style={{
          marginTop: '2rem',
          backgroundColor: 'var(--color-indigo-100)',
        }}
      >
        <TextBox>{tableExplanation}</TextBox>
      </Container>
    </>
  );
}

export default CustomersData;
