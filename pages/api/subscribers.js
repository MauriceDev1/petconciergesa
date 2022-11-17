// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handel (req, res){
  const  email  = req.body;

  console.log(email)

  let transporter = nodemailer.createTransport({
    host: 'mail.petconcierge.co.za',
    port: '465',
    secure: true,
    auth: {
      user: 'info@petconcierge.co.za',
      pass: 'Avocados#27',
    },
    tls: {
      rejectUnauthorized: false
     }
  });

  try {
    let email = await transporter.sendMail({
      from: 'info@petconcierge.co.za',
      to: 'info@petconcierge.co.za' ,
      subject: 'Subscriber from website with following Email',
      html:`<p>${email}</p>`
    });

    console.log("Message Sent", email.messageId)
    res.status(200).json(email.messageId)
  } catch (error) {
    res.status(400).json(error)
  }
}