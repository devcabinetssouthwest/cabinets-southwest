import nodemailer from 'nodemailer'

const FILE_SIZE_LIMIT = 20

export default async function handler(req, res) {

    const {quoteReq, attachment} = req.body;

    var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASS
        }
    });

    var emailText = '<h3>You have recieved a new quote request from your website.</h3><hr/>'
 

    emailText += `<ul><li>Name: ${quoteReq.name}</li>`
    emailText += `<li>Email: <a href = "mailTo:${quoteReq.email}">${quoteReq.email}</a></li>`
    emailText += `<li>Number: <a href= "tel:+${quoteReq.number}">${quoteReq.number}</a></li></ul>`
    emailText += `<hr/><h4>Message</h4><p>${quoteReq.messege}</p><hr/>`
    emailText += `<a href = "mailTo:${quoteReq.email}"><button>Respond</button></a>`

    const mailOptions = {
        from: 'devcabinetssouthwest@gmail.com',
        to: 'jnorman@cabinetssouthwest.com',
        subject: `New Quote Request from ${quoteReq.name} at ${quoteReq.email}`,
        html: emailText,
        // attachments: attachments
        };


    smtpTransport.sendMail(mailOptions, function (err, info) {
        if (err){
            res.status(400).end(JSON.stringify({ message:JSON.stringify(err) }))
        }
        else{
            res.status(200).end(JSON.stringify({ message:'Send Mail' }))
        }
        });
}


    

