// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async (req, res) => {
  const  email  = req.body;
  
  const transporter = nodemailer.createTransport({
    host: 'mail.petconcierge.co.za',
    port: '465',
    secure: true,
    auth: {
      user: 'info@petconcierge.co.za',
      pass: 'Avocados#27',
    }
  });

  try {
    const email = await transporter.sendMail({
      from: email,
      to: 'info@petconcierge.co.za' ,
      subject: `Subscriber from website with following ${email}`,
      html:'<p>Subscriber</p>'
    })

    console.log("Message Sent", email.messageId)
    res.status(200).json(email.messageId)
  } catch (error) {
    res.status(400).json(error)
  }
}