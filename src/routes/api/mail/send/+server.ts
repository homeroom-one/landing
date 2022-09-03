// Svelte
import type { RequestEvent } from '@sveltejs/kit'

// Packages
import sgMail from '@sendgrid/mail'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: RequestEvent) {
  sgMail.setApiKey(import.meta.env.VITE_SNEDGRID_SEND_MAIL_API)

  const response = await request.json()

  try {
    await sgMail.send(response)

    const blob = {
      data: {
        message: 'success'
      }
    }

    return new Response(JSON.stringify(blob))
  } catch (error: any) {

    const blob = {
      data: {
        error: {
          message: 'error',
          details: []
        }
      }
    }

    if (error.response) {
      blob.data.error.details = error.response.body
    }

    return new Response(JSON.stringify(blob))
  }
}
