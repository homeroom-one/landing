// Svelte
import type { RequestEvent } from '@sveltejs/kit'
// Packages
import sgMail, { type MailDataRequired } from '@sendgrid/mail'

interface Payload {
  to: string
  from: string
  template_id: string
}

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: RequestEvent) {
  sgMail.setApiKey(import.meta.env.VITE_SNEDGRID_SEND_MAIL_API)

  const response = await request.json()

  const payload: MailDataRequired = {
    to: response.to,
    from: `hello@homeroomone.com`,
    templateId: 'd-1ea692f963d5494db793a711161a82a5',
  }

  try {
    await sgMail.send(payload)

    const blob = {
      status: 200,
      data: {
        message: 'success'
      }
    }

    return new Response(JSON.stringify(blob))
  } catch (error: any) {
    const blob = {
      status: 400,
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
