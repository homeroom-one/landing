// Svelte
import { error } from '@sveltejs/kit'

// Packages
import sgMail from '@sendgrid/mail'

/** @type {import('./$types').RequestHandler} */
export async function POST({ params }: any) {
  sgMail.setApiKey(import.meta.env.VITE_SNEDGRID_SEND_MAIL_API)

  console.log('+server > POST > params: ', params)

  const message = {
    to: `hello@homeroomone.com`,
    from: `hello@homeroomone.com`,
    // subject: `Interest inquiry: ${from}`,
    subject: `Interest inquiry: `,
    // text: 'and easy to do anywhere, even with Node.js',
    // html: `Interest inquiry: ${from}`
    html: `Interest inquiry: `
  }

  console.log('---- SendGrid > Sending Message -----')

  const response = await sgMail.send(message)
    // .then(
    //   (response: any) => {
    //     console.log('sendgrid > response: ', response)
    //     return new Response(response.statusCode)
    //   },
    //   (error: any) => {
    //     console.error('sendgrid > error: ', error)
        
    //     if (error.response) {
    //       console.error(error.response.body)
    //       return error.response
    //     }

    //     return error
    //   }
    // )

  console.log('/api/mail/send > response: ', response)

  if (error) {
    throw error(404, 'Not found')
  }

  return new Response(response[0].Response.statusCode)
}