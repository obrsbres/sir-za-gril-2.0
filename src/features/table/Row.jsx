import HeadRow from './rows/HeadRow';
import BodyRow from './rows/BodyRow';
import FootRow from './rows/FootRow';
import React from 'react';

function Row({ type, customer, numOfDeliveries }) {
  if (type === 'head') return <HeadRow />;

  if (type === 'body') return <BodyRow customer={customer} />;

  if (type === 'foot') return <FootRow numOfDeliveries={numOfDeliveries} />;
}

export default Row;
