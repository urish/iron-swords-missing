'use server'

import {fetchDbData} from '@/services/fetch-db-data';

const endpoint = `${getBaseUrl()}/api/supabase`;
export async function fetchById({id}: {id: string}) {
  // !TODO fix this
  const res = await fetchDbData();
  const profile = res.filter((person) => person.id == id);
  
  return profile[0];
}