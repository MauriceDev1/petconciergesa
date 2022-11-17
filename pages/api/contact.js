// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer';

export default async function handel (req, res){
  const  data  = req.body;

  console.log(data)

  let transporter = nodemailer.createTransport({
    host: 'mail.petconcierge.co.za',
    port: '465',
    secure: true,
    auth: {
      user: 'test@petconcierge.co.za',
      pass: 'Avocados#27',
    },
    tls: {
      rejectUnauthorized: false
     }
  });

  try {
    
    let emailResult = await transporter.sendMail({
      from: 'test@petconcierge.co.za',
      to: 'info@petconcierge.co.za' ,
      subject: 'Contact form information',
      html:`<p>Name : ${data.firstName}</p><p>Email : ${data.email}</p><p>Phone : ${data.phone}</p><p>Subject : ${data.subject}</p><p>Message : ${data.message}</p>`
    
    });

    console.log("Message Sent", emailResult.messageId)
    res.status(200).json(emailResult.messageId)
  
} catch (error) {
    res.status(400).json(error)
  }

}