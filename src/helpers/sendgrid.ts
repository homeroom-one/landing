// Packages
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(import.meta.env.VITE_SNEDGRID_SEND_MAIL_API)

export const sendEmail = async (from: string) => {
  const message = {
    to: `hello@homeroomone.com`,
    from: `hello@homeroomone.com`,
    subject: `Interest inquiry: ${from}`,
    // text: 'and easy to do anywhere, even with Node.js',
    html: `Interest inquiry: ${from}`
  }

  console.log('---- SendGrid > Sending Message -----')

  await sgMail.send(message).then(response => {
    console.log('sendgrid > response: ', response)
  }, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  })
}
