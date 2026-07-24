import { useSearchParams } from 'react-router-dom';
import { useSpecificDelivery } from './useSpecificDelivery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledSummaryLayout = styled.div`
  width: 75vw;
  height: 90vh;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 5fr 4fr 4fr;
  background-color: var(--color-gray-400);
  border: 1px solid var(--color-brand-600);
  border-radius: 4px;
  margin: ${(props) =>
    props.$pageSize === 'mobile' ? '1px 1px 1px ' : '1rem 0.5rem 1rem'};
  gap: 1rem;
  padding: 1rem 0rem;
`;
const StyledOveralHeading = styled.h1`
  width: 95%;
  height: auto;
  font-size: 2.5rem;
  font-weight: 600;
  background-color: var(--color-yellow-800);
  border: 1px solid var(--color-yellow-600);
  border-radius: 4px;
  color: var(--color-grey-100);
  grid-row: 1/1;
  grid-column: 1/-1;
  align-self: center;
  justify-self: center;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const StyledGrillLayout = styled.div`
  width: 95%;
  height: 95%;
  background-color: var(--color-grey-800);
  border: 1px solid var(--color-yellow-600);
  border-radius: 4px;
  color: var(--color-grey-100);
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
  width: 80%;
  align-self: center;
  justify-self: center;
  background-color: var(--color-grey-800);
  border-radius: 4px;
  grid-column: 2/2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledImg = styled.img`
  width: 90%;
  height: auto;
  border-radius: 4px;
`;
function SummaryLayout() {
  const [searchParams] = useSearchParams();
  const deliveryId = searchParams.get('sortBy') || 1;

  const { isPending, delivery } = useSpecificDelivery({ deliveryId });

  if (!delivery) return;

  return (
    <StyledSummaryLayout>
      <StyledOveralHeading>Збирни преглед паковања</StyledOveralHeading>
      <StyledGrillLayout>
        <StyledOveralHeading style={{ fontSize: '2rem' }}>
          Грил
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '1.5rem' }}>
          Укупно # kg
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '1.5rem' }}>
          Паковање 1кг: #5 kg (#5 ком)
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '1.5rem' }}>
          Паковање 0.5кг: #5 kg (#10 ком)
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '1.5rem' }}>
          Паковање ком: #2 kg (#апрокс 5 ком)
        </StyledOveralHeading>
      </StyledGrillLayout>
      <StyledImgBox>
        <StyledImg src='/gril.jpg' alt='gril' />
      </StyledImgBox>
      <StyledTradLayout>
        <StyledOveralHeading style={{ fontSize: '2.5rem' }}>
          Ситан
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '1.5rem' }}>
          Укупно # kg
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '1.5rem' }}>
          Укупно # 0.5kg
        </StyledOveralHeading>
      </StyledTradLayout>
      <StyledImgBox>
        <StyledImg src='/trad.jpg' alt='trad' />
      </StyledImgBox>
      <StyledCreamLayout>
        <StyledOveralHeading style={{ fontSize: '2.5rem' }}>
          Увара
        </StyledOveralHeading>
        <StyledOveralHeading style={{ fontSize: '2rem' }}>
          Укупно # kg
        </StyledOveralHeading>
      </StyledCreamLayout>
      <StyledImgBox>
        <StyledImg src='/cream.jpg' alt='cream' />
      </StyledImgBox>
    </StyledSummaryLayout>
  );
}

export default SummaryLayout;
