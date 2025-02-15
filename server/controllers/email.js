const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({

  service: 'Gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
});


const send_email = async (req, res) => {
  
    const { name, subject, text, from, to } = req.body;
    const default_subject = 'This is a default subject';
    const mailOptions = {
      to: to,
      from: from,
      subject: subject,
      text: text,
      name: name,
    
    }

        if(!subject || !text || Number(subject) == 0 || Number(text) == 0   ){
            return res.json({ ok: false, message: 'Please fill in all inputs!' });
        }


    try {
      const success = await transport.sendMail(mailOptions);
    
      return res.json({ ok: true, message: 'Email sent!' });
    } catch (err) {
   
      return res.json({ ok: false, message: err });
    }
  };
  
  module.exports = { send_email };