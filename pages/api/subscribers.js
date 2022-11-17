import nodemailer from 'nodemailer';

export default async function handel (req, res){
  const  email  = req.body;

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
    
    let emailResult = await transporter.sendMail({
      from: 'info@petconcierge.co.za',
      to: 'info@petconcierge.co.za' ,
      subject: 'Contact form information',
      html:`<p>${email}</p>`
    
    });

    console.log("Message Sent", emailResult.messageId)
    res.status(200).json(emailResult.messageId)
  
} catch (error) {
    res.status(400).json(error)
  }

}