const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer'); 

router.post('/', async (req,res) => {

    const new_user = {
        name: req.body.name,
        subject: req.body.subject,
        message: req.body.message
    }

    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = await nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.email, // generated ethereal user
            pass: process.env.password// generated ethereal password
        }
        });
    
        // send mail with defined transport object
        let info = await transporter.sendMail({
        from: new_user.name, // sender address
        to: process.env.email, // list of receivers
        subject: new_user.subject, // Subject line
        text: '', // plain text body
        html: `<p>name: ${new_user.name} <br/>
                  message: ${new_user.message}
              </p>` // html body
        });

        console.log('Message Sent!');
        res.send('Delivered!');
    }
    catch (err) {
        console.log("ERROR SENDING EMAIL", err); 
        res.status(404).send(err);
    }
}); 

module.exports = router; 