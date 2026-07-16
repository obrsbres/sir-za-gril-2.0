import supabase from './supabase';
export async function getDeliveries() {
  const { data, error } = await supabase.from('current_delivery').select('*');
  // console.log(data);
  if (error) {
    console.log(error);
    throw new Error('nesto se nije skinulo sa supe');
  } else return data;
}
export async function updateField(column, columnValue, id) {
  switch (column) {
    case 'current_delivery': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ current_delivery: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje trenutne dostave');
      }
      break;
    }
    case 'name': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ customer_name: columnValue })
        .select('*')
        .single()
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje ime');
      }
      break;
    }
    case 'num_in_delivery': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ num_in_delivery: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje rb');
      }
      break;
    }
    case 'grill_pack': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ gril_pack: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje gril pack');
      }
      break;
    }
    case 'grill_quant': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ grill_quant: columnValue })
        .select('*')
        .eq('customer_id', `${id}`)
        .single();

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje gril quant');
      }
      break;
    }
    case 'trad_pack': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ trad_pack: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje sitan pack');
      }
      break;
    }
    case 'trad_quant': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ trad_quant: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje sitan quant');
      }
      break;
    }
    case 'cream_quant': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ cream_quant: Number(columnValue) })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje uvara');
      }
      break;
    }
    case 'customer_address': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ customer_address: columnValue })
        .select('*')
        .eq('customer_id', `${id}`)
        .single();

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje ADRESA');
      }
      break;
    }
    case 'customer_telephone': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ customer_telephone: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje rb');
      }
      break;
    }
    case 'time_for_delivery': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ time_for_delivery: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updatovalo polje rb');
      }
      break;
    }
    case 'customer_note': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ customer_note: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updajtovalo polje note');
      }
      break;
    }
    case 'bill': {
      const { error } = await supabase
        .from('current_delivery')
        .update({ bill: columnValue })
        .select('*')
        .eq('customer_id', `${id}`);

      if (error) {
        console.log(error);
        throw new Error('nije se updajtovalo polje cene');
      }
      break;
    }
  }
}
export async function insertRow(currentRow, data = {}, deliveryId) {
  const { error } = await supabase
    .from('current_delivery')
    .insert([
      {
        customer_id: Number(new Date()),
        num_in_delivery: currentRow + 1,
        customer_name: data.name,
        grill_quant: data.gril,
        // gril_pack: data.grilPack,
        trad_quant: data.trad,
        // trad_pack: data.tradPack,
        customer_address: data.add,
        customer_telephone: data.tel,
        time_for_delivery: data.time,
        customer_note: data.note,
        bill: data.price,
        cream_quant: data.cream,
        id_of_delivery: deliveryId,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error('nije napravio novi red');
  }
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
