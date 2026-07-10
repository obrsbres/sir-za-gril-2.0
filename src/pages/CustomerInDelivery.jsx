import styled from 'styled-components';
import { hide } from '../features/customer/customerSlice';
import { useDispatch, useSelector } from 'react-redux';
const StyledCustomer = styled.div`
  width: 45vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 40rem 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 0.5fr 1.5fr;
  color: var(--color-grey-900);
  background-color: var(--color-grey-50);
  border-style: solid;
  border: 3px;
  border-color: var(--color-grey-900);
  justify-content: space-evenly;
  align-items: center;
`;
const StyledHeader = styled.div`
  border: 2px solid var(--color-grey-900);
  border-radius: 10%;
  display: flex;
  width: 100%;
  grid-column: 1/-1;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: var(--color-red-800);
  background-color: var(--color-grey-200);
  height: 100%;
`;
const StyledRow = styled.div`
  padding: 1px;
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
`;
const StyledNameOfRow = styled.div`
  border: 2px solid var(--color-grey-900);
  border-radius: 5%;
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: var(--color-red-700);
  background-color: var(--color-grey-100);
  height: 100%;
  padding-left: 3%;
  flex-wrap: wrap;
`;
const StyledDataOfRow = styled.div`
  border: 2px solid var(--color-grey-800);
  border-radius: 5% 10% 10% 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: var(--color-red-800);
  background-color: var(--color-grey-50);
  height: 100%;
  flex-wrap: wrap;
`;
import React from 'react';
import { useNavigate } from 'react-router-dom';
function CustomerInDelivery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  dispatch(hide());
  const customer = useSelector((state) => state.customers.customerInDelivery);
  
  if (!customer.length) navigate('/customersData')

  const {
    // customer_id: id,
    num_in_delivery: rb,
    customer_name: customerName,
    grill_quant: grillQuant,
    gril_pack: grillPack,
    trad_pack: tradPack,
    trad_quant: tradQuant,
    cream_quant: creamQuant,
    customer_address: customerAddress,
    // created_at: createdAt,
    customer_note: customerNote,
    customer_telephone: customerTelephone,
    time_for_delivery: timeForDelivery,
    // bill,
  } = { ...customer };


  return (
    <StyledCustomer>
      <StyledHeader>преглед купца</StyledHeader>
      <StyledRow>
        <StyledNameOfRow>Име</StyledNameOfRow>
        <StyledDataOfRow>{customerName}</StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow>адреса</StyledNameOfRow>
        <StyledDataOfRow>{customerAddress}</StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow>телефон</StyledNameOfRow>
        <StyledDataOfRow>{customerTelephone}</StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow>редни број</StyledNameOfRow>
        <StyledDataOfRow>{rb}</StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow>укупно</StyledNameOfRow>
        <StyledDataOfRow
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 2fr',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '1px solid var(--color-grey-800)',
            }}
          >
            <div
              style={{
                color: 'var(--color-blue-700)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
              }}
            >
              грил
            </div>
            <div
              style={{
                textTransform: 'lowercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {grillQuant}
              {grillPack}
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 2fr',
              justifyContent: 'center',
              alignItems: 'center',
              borderRight: '1px solid var(--color-grey-800)',
            }}
          >
            <div
              style={{
                color: 'var(--color-blue-700)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
              }}
            >
              ситан
            </div>
            <div
              style={{
                textTransform: 'lowercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {tradQuant}
              {tradPack}
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '1fr 2fr',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'var(--color-blue-700)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
              }}
            >
              увара
            </div>
            <div
              style={{
                textTransform: 'lowercase',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {creamQuant} ком
            </div>
          </div>
        </StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow>цена</StyledNameOfRow>
        <StyledDataOfRow
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr 2fr',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
            }}
          >
            <div
              style={{
                borderRight: '1px solid var(--color-grey-800)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {grillQuant * 1500}
            </div>
            <div
              style={{
                borderRight: '1px solid var(--color-grey-800)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              {tradQuant * 1000}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {creamQuant * 400}
            </div>
          </div>
          <div
            style={{
              gridColumn: '1 / -1',
              alignItems: 'center',
              display: 'grid',
              gridTemplateRows: '1fr 0.5fr',
            }}
          >
            <div
              style={{
                display: 'flex',
                border: '1px solid var(--color-grey-800)',
                justifyContent: 'center',
                fontSize: '4rem',
                fontWeight: 'bold',
              }}
            >
              {tradQuant * 1000 + grillQuant * 1500 + creamQuant * 400}
            </div>
            <div
              style={{
                backgroundColor: 'var(--color-grey-100)',
                paddingRight: '4%',
                borderRadius: '0% 0% 55% 0%',
                border: '1px solid var(--color-grey-800)',
                justifySelf: 'right',
              }}
            >
              {Math.ceil(
                (tradQuant * 1000 + grillQuant * 1500 + creamQuant * 400) / 1000
              ) *
                1000 -
                (tradQuant * 1000 + grillQuant * 1500 + creamQuant * 400)}
            </div>
          </div>
        </StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow>време</StyledNameOfRow>
        <StyledDataOfRow
          style={{
            gridColumn: '2/-1',
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr',
          }}
        >
          <div
            style={{
              borderRight: '1px solid var(--color-grey-800)',
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'var(--color-blue-700)',
                fontSize: '1.5rem',
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              период
            </div>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
              1900/1930
            </div>
          </div>
          <div
            style={{
              display: 'grid',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                color: 'var(--color-blue-700)',
                fontSize: '1.5rem',
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              {timeForDelivery}
            </div>
            <div style={{ display: 'grid', justifyContent: 'center' }}>
              1925
            </div>
          </div>
        </StyledDataOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow
          style={{
            fontWeight: 'bolder',
            gridColumn: '1/-1',
          }}
        >
          напомена:
        </StyledNameOfRow>
      </StyledRow>
      <StyledRow>
        <StyledNameOfRow
          style={{
            justifyContent: 'center',
            gridColumn: '1/-1',
            fontSize: '1rem',
            textTransform: 'lowercase',
            color: 'var(--color-blue-700)',
            backgroundColor: 'var(--color-grey-50)',
          }}
        >
          {customerNote}
        </StyledNameOfRow>
      </StyledRow>
    </StyledCustomer>
  );
}

export default CustomerInDelivery;
