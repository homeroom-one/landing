// Svelte
import { error } from '@sveltejs/kit'
// Store
import { getLandingPageData } from '../store'

/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
  getLandingPageData().catch(() => {
    throw error(404, 'Not found')
  })
}
