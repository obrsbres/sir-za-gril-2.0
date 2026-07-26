import { useSearchParams } from 'react-router-dom';
import { useSpecificDelivery } from './useSpecificDelivery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScreenWidth from '../../hooks/useScreenWidth';

const StyledSummaryLayout = styled.div`
  width: ${(props) => (props.$isMobile === 'mobile' ? '100vw' : '75vw')};
  height: ${(props) => (props.$isMobile === 'mobile' ? '80vh' : '90vh')};
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 4fr 4fr 4fr;
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-brand-600);
  border-radius: 4px;
  row-gap: ${(props) => (props.$isMobile === 'mobile' ? '2px' : '1rem')};
  column-gap: 0px;
  padding: ${(props) =>
    props.$isMobile === 'mobile' ? '2px 0px' : '1rem 0rem'};
`;
const StyledOveralHeading = styled.h1`
  width: 95%;
  height: auto;
  font-size: ${(props) => (props.$isMobile === 'mobile' ? '1.5rem' : '2.5rem')};
  font-weight: 600;
  background-color: var(--color-yellow-800);
  border: 1px solid var(--color-yellow-600);
  border-radius: 4px;
  color: var(--color-indigo-700);
  grid-row: 1/1;
  grid-column: 1/-1;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledGrillLayout = styled.div`
  width: 100%;
  height: 95%;
  background-color: var(--color-indigo-700);
  border: 1px solid var(--color-yellow-600);
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  color: var(--color-indigo-100);
  grid-row: 2/2;
  grid-column: 1/1;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const StyledTradLayout = styled(StyledGrillLayout)`
  grid-row: 3/3;
`;
const StyledCreamLayout = styled(StyledGrillLayout)`
  grid-row: 4/4;
`;
const StyledImgBox = styled.div`
  height: 95%;
  width: 100%;
  align-self: center;
  justify-self: center;
  background-color: var(--color-indigo-700);
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  grid-column: 2/2;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 4px 4px 0px 0px;
`;
const StyledImg = styled.img`
  width: 150px;
  height: auto;
  border: solid 8px var(--color-indigo-100);
  border-radius: 4px;
`;
function SummaryLayout() {
  const [searchParams] = useSearchParams();
  const deliveryId = searchParams.get('sortBy') || 1;
  const isMobile = useScreenWidth();
  const { isPending, delivery } = useSpecificDelivery({ deliveryId });

  if (!delivery) return;
  console.log(delivery);
  const grilKg = delivery.reduce(
    (acc, curr) => (curr.gril_pack === 'kg' ? acc + curr.grill_quant : acc),
    0,
  );
  const grilPola = delivery.reduce(
    (acc, curr) => (curr.gril_pack === '0.5kg' ? acc + curr.grill_quant : acc),
    0,
  );
  const grilKom = delivery.reduce(
    (acc, curr) => (curr.gril_pack === 'ком' ? acc + curr.grill_quant : acc),
    0,
  );
  const tradKg = delivery.reduce(
    (acc, curr) => (curr.trad_pack === 'kg' ? acc + curr.trad_quant : acc),
    0,
  );
  const tradPola = delivery.reduce(
    (acc, curr) => (curr.trad_pack === '0.5kg' ? acc + curr.trad_quant : acc),
    0,
  );
  const cream = delivery.reduce((acc, curr) => acc + curr.cream_quant, 0);
  console.log(grilKg, grilKom, grilPola, tradKg, tradPola, cream);
  return (
    <StyledSummaryLayout $isMobile={isMobile}>
      <StyledOveralHeading $isMobile={isMobile}>
        {isMobile ? 'Збирно' : 'Збирни преглед паковања'}
      </StyledOveralHeading>
      <StyledGrillLayout>
        <StyledOveralHeading
          style={{ fontSize: '2rem', color: 'var(--color-indigo-100)' }}
        >
          Грил
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-indigo-100)' }}
        >
          Укупно {grilKg + grilKom + grilPola} kg
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-indigo-100)' }}
        >
          Паковање 1kg: {grilKg} kg ({grilKg} ком)
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-indigo-100)' }}
        >
          Паковање 0.5kg: {grilPola} kg ({grilPola * 2} ком)
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-indigo-100)' }}
        >
          Паковање ком: {grilKom} kg (~{grilKom * 4} ком)
        </StyledOveralHeading>
      </StyledGrillLayout>
      <StyledImgBox>
        <StyledImg src='/gril.jpg' alt='gril' />
      </StyledImgBox>
      <StyledTradLayout>
        <StyledOveralHeading
          style={{ fontSize: '2.5rem', color: 'var(--color-indigo-100)' }}
        >
          Ситан
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-grey-100)' }}
        >
          Укупно {tradKg + tradPola} kg
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-grey-100)' }}
        >
          Паковање 1kg: {tradKg}kg ({tradKg} ком)
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '1.5rem', color: 'var(--color-grey-100)' }}
        >
          Паковање 0.5kg: {tradPola}kg ({tradPola * 2} ком)
        </StyledOveralHeading>
      </StyledTradLayout>
      <StyledImgBox>
        <StyledImg src='/trad.jpg' alt='trad' />
      </StyledImgBox>
      <StyledCreamLayout>
        <StyledOveralHeading
          style={{ fontSize: '2.5rem', color: 'var(--color-grey-100)' }}
        >
          Увара
        </StyledOveralHeading>
        <StyledOveralHeading
          style={{ fontSize: '2rem', color: 'var(--color-grey-100)' }}
        >
          Укупно {cream} ком. (по 300g)
        </StyledOveralHeading>
      </StyledCreamLayout>
      <StyledImgBox>
        <StyledImg src='/cream.jpg' alt='cream' />
      </StyledImgBox>
    </StyledSummaryLayout>
  );
}

export default SummaryLayout;
