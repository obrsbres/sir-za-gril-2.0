import supabase from './supabase';

export async function getDeliveriesInfo() {
  let { data, error } = await supabase.from('deliveries').select('*');

  if (error) {
    console.log(error);
    throw new Error('nesto se nije skinulo sa supe');
  } else return data;
}

export async function createDelivery({ numOfDeliveries, data = {} }) {
  const { error } = await supabase
    .from('deliveries')
    .insert([
      {
        id: Number(new Date()),
        id_of_delivery: numOfDeliveries
          ? Number(numOfDeliveries) + 1
          : Number(new Date()),
        delivery_end_day: data.endDay,
        delvery_start_day: data.startDay,
        num_of_customers: data.numOfCustomers,
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error('Проблем са прављењем нове доставе');
  }
}
export async function updateDelivery({ id, data = {} }) {
  const { data: updatedData, error } = await supabase
    .from('deliveries')
    .update({
      id_of_delivery: id,
      delivery_end_day: data.endDay,
      delvery_start_day: data.startDay,
      num_of_customers: data.numOfCustomers,
    })
    .eq('id_of_delivery', id)
    .select();

  if (error) {
    console.log(error);
    throw new Error('Проблем са променом података');
  }
  return updatedData;
}

export async function deleteDelivery({ id }) {
  const { error } = await supabase
    .from('deliveries')
    .delete()
    .eq('id_of_delivery', id);

  if (error) {
    console.log(error);
    throw new Error('Није избрисана достава');
  }
}
