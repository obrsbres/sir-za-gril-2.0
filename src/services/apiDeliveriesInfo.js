import supabase from './supabase';

export async function getDeliveriesInfo() {
  let { data, error } = await supabase.from('deliveries').select('*');

  data && console.log(data);
  if (error) {
    console.log(error);
    throw new Error('nesto se nije skinulo sa supe');
  } else return data;
}
