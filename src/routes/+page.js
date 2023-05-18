import { error } from '@sveltejs/kit'
import createClient from '$lib/functionality/client'

export const prerender = true;

export async function load({ params, fetch, request }) {
  const api = createClient({ fetch, request })
  const { uid } = params

  try {
    const document = await api.getByUID('page', "home")

    return { document, uid }
  } catch (e) {
    // Show user the page not found error
    throw error(404, e.message)
  }
}