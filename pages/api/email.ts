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

  const mailData = {
    from: "trapp@demo.com",
    to: req.body.to,
    subject: `Welcome to Trapp ${req.body.name}`,
    text: req.body.message,
    //html: <div>{req.body.text}</div>,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
    res.status(200).json({ message: "Success" });
  });
}
