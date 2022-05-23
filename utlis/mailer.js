import nodemailer from "nodemailer";

async function mailer(to, subject, body) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_SERVER,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.NO_REPLY_EMAIL, // generated ethereal user
            pass: process.env.NO_REPLY_PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: "1f3283a9fa-2e5a5b+1@inbox.mailtrap.io", // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: body, // html body
    });

    console.log("Message sent: %s", info.messageId);
}



export default mailer;
