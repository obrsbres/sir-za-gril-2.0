import supabase from './supabase';
export async function getDeliveries() {
  const { data, error } = await supabase.from('current_delivery').select('*');

  if (error) {
    console.log(error);
    throw new Error('nesto se nije skinulo sa supe');
  } else return data;
}
export async function getSpecificDelivery({ deliveryId }) {
  const { data, error } = await supabase
    .from('current_delivery')
    .select('*')
    .eq('id_of_delivery', `${deliveryId}`);
  if (error) {
    console.log(error);
    throw new Error('nesto se nije skinulo sa supe');
  } else return data;
}
export async function updateField({ column, columnValue, id }) {
  switch (column) {
    case 'current_delivery': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ current_delivery: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje trenutne dostave');
      }
      return data;
    }
    case 'customer_name': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ customer_name: columnValue })
        .eq('customer_id', id)
        .select();

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje ime');
      }
      return data;
    }
    case 'num_in_delivery': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ num_in_delivery: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje rb');
      }
      return data;
    }
    case 'grill_pack': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ gril_pack: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje gril pack');
      }
      return data;
    }
    case 'grill_quant': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ grill_quant: columnValue })
        .select('*')
        .eq('customer_id', `${id}`)
        .single();

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje gril quant');
      }
      return data;
    }
    case 'trad_pack': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ trad_pack: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje sitan pack');
      }
      return data;
    }
    case 'trad_quant': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ trad_quant: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje sitan quant');
      }
      return data;
    }
    case 'cream_quant': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ cream_quant: Number(columnValue) })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje uvara');
      }
      return data;
    }
    case 'customer_address': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ customer_address: columnValue })
        .select('*')
        .eq('customer_id', `${id}`)
        .single();

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje ADRESA');
      }
      return data;
    }
    case 'customer_telephone': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ customer_telephone: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje rb');
      }
      return data;
    }
    case 'time_for_delivery': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ time_for_delivery: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje rb');
      }
      return data;
    }
    case 'customer_note': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ customer_note: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updajtovalo polje note');
      }
      return data;
    }
    case 'bill': {
      const { data, error } = await supabase
        .from('current_delivery')
        .update({ bill: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updajtovalo polje cene');
      }
      return data;
    }
  }
}
export async function insertRow(currentRow, data = {}, deliveryId) {
  console.log(currentRow, data, deliveryId);
  const { data: newData, error } = await supabase
    .from('current_delivery')
    .insert([
      {
        customer_id: Number(new Date()),
        num_in_delivery: currentRow + 1,
        customer_name: data.name,
        grill_quant: Number(data.gril),
        // gril_pack: data.grilPack,
        trad_quant: Number(data.trad),
        // trad_pack: data.tradPack,
        customer_address: data.add,
        customer_telephone: Number(data.tel),
        time_for_delivery: data.time,
        customer_note: data.note,
        bill: Number(data.price),
        cream_quant: Number(data.cream),
        id_of_delivery: Number(deliveryId),
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error('nije napravio novi red');
  }
  return newData;
}

export async function removeRow(id) {
  const { error } = await supabase
    .from('current_delivery')
    .delete()
    .eq('customer_id', `${id}`);

  if (error) {
    console.log(error);
    throw new Error('neje se izbrisaja');
  }
}
