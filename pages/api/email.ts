// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "wingman.trapp@gmail.com",
      pass: "pskjkrbvibchoplr",
    },
    secure: true,
  });

  // TODO change url
  const mailData = {
    from: "trapp@demo.com",
    to: req.body.to,
    subject: `Welcome to Trapp`,
    //text: req.body.message,
    html: `<div>
    <h2>Whats uup!</h2> </br>
    <h4>You have been invited to trapp !</h4> </br>
    <h4>Create new account <a href="http://localhost:3000/login">Trapp </a> </h4>    
    </div>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
    res.status(200).json({ message: "Success" });
  });
}
