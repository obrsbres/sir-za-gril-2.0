import React from 'react';

import styled from 'styled-components';
import NewRowButton from '../tableUIs/NewRowButton';
import { StyledHeadCell } from './HeadRow';
import { getDeliveries, insertRow } from '../../../services/apiDeliveries';
import { useSelector } from 'react-redux';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { useSpecificDelivery } from '../../summary/useSpecificDelivery';

const StyledFootRow = styled.tr`
  width: ${(props) => (props.$isMobile === 'mobile' ? '37rem' : '111rem')};
  height: auto;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: var(--color-blue-700);
  color: var(--color-blue-100);
  span {
    color: var(--color-red-800);
  }
`;
function FootRow({ numOfDeliveries }) {
  const isMobile = useScreenWidth();

  return (
    <StyledFootRow $isMobile={isMobile}>
      <td>
        Локација: <span> {numOfDeliveries}</span>
      </td>
      <td>
        Време <span>{numOfDeliveries * 15}</span> мин.
      </td>
    </StyledFootRow>
  );
}

export default FootRow;
