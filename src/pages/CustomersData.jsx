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

const Container = styled.div`
  width: fit-content;
  height: auto;
  padding-left: 4rem;
  padding-top: 2rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 10fr;
  justify-content: start;
  align-items: start;
  flex-direction: column;
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
    </Container>
  );
}

export default CustomersData;
