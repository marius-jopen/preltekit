import { error } from '@sveltejs/kit'
import createClient from '$lib/functionality/client'

export const prerender = true;

export async function load({ fetch, params, request }) {
  const { uid } = params

  const api = createClient({ fetch, request })
  const document = await api.getByUID('project', uid)

  if (document) {
    return { document }
  }

  error(404, 'Not found')
}