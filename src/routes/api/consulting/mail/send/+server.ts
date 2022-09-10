// Svelte
import type { RequestEvent } from '@sveltejs/kit'
// Packages
import sgMail, { type MailDataRequired } from '@sendgrid/mail'

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }: RequestEvent) {
  sgMail.setApiKey(import.meta.env.VITE_SNEDGRID_SEND_MAIL_API)

  const response = await request.json()

  const payload: MailDataRequired = {
    to: response.to,
    from: `hello@homeroomone.com`,
    bcc: `adam@homeroomone.com`,
    templateId: 'd-5cdcc2d38afa4adb981ec2e001ffdda4'
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
