import HeadRow from './rows/HeadRow';
import BodyRow from './rows/BodyRow';
import FootRow from './rows/FootRow';
import React from 'react';

function Row({ type, customer }) {
  if (type === 'head') return <HeadRow />;

  if (type === 'body') return <BodyRow customer={customer} />;

  if (type === 'foot') return <FootRow />;
}

export default Row;
