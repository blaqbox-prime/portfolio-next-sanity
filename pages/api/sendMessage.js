"use strict";
import { createTestAccount, createTransport, getTestMessageUrl } from "nodemailer";

export default async function handler(req,res) {
    const body = JSON.parse(req.body);
    if(req.method === "POST"){
        console.log(req.body);
    let transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_MAIL_USER,
            pass: 'wclvqoexmxrjxnxm'
        }
    }); 

   let info = await transporter.sendMail({
        from: 'karabosambo.prime@gmail.com', // sender address
        to: "karabosambo@outlook.com, blaqboxdev@protonmail.com", // list of receivers
        subject: "Portfolio Message", // Subject line
        text: `${body.message}\n\n- ${body.name} \n\n${body.email}`, // plain text body
    });
    
    if (info.accepted){
        console.log(info);
        return res.redirect('/');
    } else {
        console.log("something went wrong");
        return res.status(500).json({'message': 'Server Error'})
    }
    
    }
}