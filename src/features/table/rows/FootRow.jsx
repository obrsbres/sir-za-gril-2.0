import React from 'react';

import styled from 'styled-components';
import NewRowButton from '../tableUIs/NewRowButton';
import { StyledHeadCell } from './HeadRow';
import { getDeliveries, insertRow } from '../../../services/apiDeliveries';
import { useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const StyledFootRow = styled.tr`
  width: 111rem;
  height: auto;
  font-size: 1.3rem;
  font-weight: bold;

  display: grid;
  grid-template-columns: 1fr 1fr 3rem;
  grid-template-rows: 4rem;
  justify-content: center;
  align-items: left;

  background-color: var(--color-silver-700);
  color: var(--color-silver-100);
`;
function FootRow() {
  const { data } = useQuery({
    queryKey: ['current_delivery'],
    queryFn: getDeliveries,
  });
  const numOfDeliveries = data.length + 1;
  const queryClient = useQueryClient();

  const { isPending: isInserting, mutate } = useMutation(
    {
      mutationFn: (num) => insertRow(num, {}),
      onSuccess: () => toast.success('Успешно додат купац'),
    },
    queryClient.invalidateQueries({
      queryKey: ['current_delivery'],
    })
  );

  return (
    <StyledFootRow>
      <td>Укупно локација {data.length}</td>
      <td>Планирано време #тиме#</td>
      <StyledHeadCell>
        <NewRowButton
          disabled={isInserting}
          onClick={() => mutate(numOfDeliveries)}
        >
          +
        </NewRowButton>
      </StyledHeadCell>
    </StyledFootRow>
  );
}

export default FootRow;
