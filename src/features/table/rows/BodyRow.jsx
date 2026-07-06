import React from 'react';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import styled from 'styled-components';
import toast from 'react-hot-toast';

import RbCell from '../cells/RbCell';
import CustNameCell from '../cells/CustNameCell';
import GrilCell from '../cells/GrilCell';
import TradCheeseCell from '../cells/TradCheeseCell';
import CreamCell from '../cells/CreamCell';
import AddressCell from '../cells/AddressCell';
import TelephoneCell from '../cells/TelephoneCell';
import TimeCell from '../cells/TimeCell';
import NoteCell from '../cells/NoteCell';
import PriceCell from '../cells/PriceCell';

import { removeRow } from '../../../services/apiDeliveries';
import RemoveRowButton from '../tableUIs/RemoveRowButton';
import RemoveButtonCell from '../cells/RemoveButtonCell';

const StyledBodyRow = styled.tr`
  width: fit-content;

  display: grid;
  grid-template-columns: 3rem 20rem 8rem 8rem 7rem 15rem 11rem 10rem 20rem 6rem 3rem;
  grid-template-rows: 4rem;
  color: var(--color-silver-700);
  background-color: var(--color-silver-100);
`;

function BodyRow({ customer }) {
  const {
    customer_id: id,
    num_in_delivery: numInDelivery,
    customer_name: name,
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
    bill: price,
  } = { ...customer };

  const queryClient = useQueryClient();
  const { isPending: isRemoving, mutate } = useMutation({
    mutationFn: (id) => removeRow(id),
    onSuccess: () => {
      toast.success('Успешно обрисан купац');
      queryClient.invalidateQueries({
        queryKey: ['current_delivery'],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <StyledBodyRow>
        <RbCell numInDelivery={numInDelivery} id={id}></RbCell>
        <CustNameCell name={name} id={id} customer={customer} />
        <GrilCell id={id} grillQuant={grillQuant} grillPack={grillPack} />
        <TradCheeseCell id={id} tradQuant={tradQuant} tradPack={tradPack} />
        <CreamCell id={id} creamQuant={creamQuant} />
        <AddressCell id={id} customerAddress={customerAddress} />
        <TelephoneCell id={id} customerTelephone={customerTelephone} />
        <TimeCell id={id} timeForDelivery={timeForDelivery}></TimeCell>
        <NoteCell id={id} customerNote={customerNote} />
        <PriceCell
          id={id}
          price={price}
          tradQuant={tradQuant}
          grilQuant={grillQuant}
          creamQuant={creamQuant}
        />
        <RemoveButtonCell>
          <RemoveRowButton
            disabled={isRemoving}
            onClick={() => {
              mutate(id);
            }}
          >
            -
          </RemoveRowButton>
        </RemoveButtonCell>
      </StyledBodyRow>
    </>
  );
}

export default BodyRow;
