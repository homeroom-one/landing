import { error } from '@sveltejs/kit'

/** @type {import('./$types').PageLoad} */
export function load({ params }: any) {
  return {
    title: 'hello world'
  }

  throw error(404, 'Not found')
}
