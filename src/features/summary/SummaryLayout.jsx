import { useSearchParams } from 'react-router-dom';
import { useSpecificDelivery } from './useSpecificDelivery';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useScreenWidth from '../../hooks/useScreenWidth';
import SummaryHeading from './SummaryHeading';
import { SummaryGrillView, StyledGrillLayout } from './SummaryGrillView';
import SummaryItem from './SummaryItem';
import SummaryValue from './SummaryValue';
import SummaryIcon from './SummaryIcon';

const StyledSummaryLayout = styled.div`
  width: ${(props) => (!props.$isMobile ? '95vw' : '75vw')};
  height: ${(props) => (!props.$isMobile ? '80vh' : '90vh')};
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows:
    1fr 4fr 4fr
    minmax(4fr, auto);
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-brand-600);
  color: var(--color-indigo-800);
  border-radius: 4px;
  row-gap: ${(props) => (props.$isMobile === 'mobile' ? '2px' : '1rem')};
  column-gap: 0px;
  padding: ${(props) =>
    props.$isMobile === 'mobile' ? '2px 1px' : '2rem 1rem'};
  margin-left: 0.5vw;
`;
const StyledTradLayout = styled(StyledGrillLayout)`
  grid-row: 3/3;
`;
const StyledCreamLayout = styled(StyledGrillLayout)`
  grid-row: 4/4;
`;

function SummaryLayout() {
  const [searchParams] = useSearchParams();
  const deliveryId = searchParams.get('sortBy') || 1;
  const screenWidth = useScreenWidth();
  const isMobile = screenWidth === 'mobile';
  console.log(isMobile);
  const { isPending, delivery } = useSpecificDelivery({ deliveryId });

  if (!delivery) return;

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
  const grill = grilKg + grilKom + grilPola;
  const tradKg = delivery.reduce(
    (acc, curr) => (curr.trad_pack === 'kg' ? acc + curr.trad_quant : acc),
    0,
  );
  const tradPola = delivery.reduce(
    (acc, curr) => (curr.trad_pack === '0.5kg' ? acc + curr.trad_quant : acc),
    0,
  );
  const trad = tradKg + tradPola;
  const cream = delivery.reduce((acc, curr) => acc + curr.cream_quant, 0);

  return (
    <StyledSummaryLayout $isMobile={isMobile}>
      <SummaryHeading
        $isMobile={isMobile}
        item={isMobile ? 'Збирно' : 'Збирни преглед паковања'}
      />
      <SummaryGrillView>
        <SummaryHeading item='Грил' />
        <SummaryHeading item='Укупно' value={`${grill} kg`}></SummaryHeading>
        <SummaryHeading
          item='Паковање 1kg'
          value={`${grilKg} kg (${grilKg} ком)`}
        />
        <SummaryHeading
          item='Паковање 0.5kg'
          value={`${grilPola} kg (${grilPola * 2} ком)`}
        />
        <SummaryHeading
          item='Паковање ком'
          value={`${grilKom} kg (~${grilKom * 4} ком)`}
        />
      </SummaryGrillView>
      <SummaryIcon src='/gril.jpg' alt='gril' />
      <StyledTradLayout>
        <SummaryHeading item='Ситан' />
        <SummaryHeading item='Укупно' value={`${trad} kg`} />
        <SummaryHeading
          item='Паковање 1kg'
          value={`${tradKg}kg (${tradKg} ком)`}
        />
        <SummaryHeading
          item='Паковање 0.5kg'
          value={`${tradPola}kg (${tradPola * 2} ком)`}
        />
      </StyledTradLayout>
      <SummaryIcon src='/trad.jpg' alt='trad' />
      <StyledCreamLayout>
        <SummaryHeading item='Увара' />
        <SummaryHeading
          item='Укупно'
          value={`${cream} ком. (по 300g)`}
        ></SummaryHeading>
      </StyledCreamLayout>

      <SummaryIcon src='/cream.jpg' alt='cream' />
    </StyledSummaryLayout>
  );
}

export default SummaryLayout;
