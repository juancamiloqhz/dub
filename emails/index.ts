import { buildSendMail } from "mailing-core";
import nodemailer from "nodemailer";

// Transactional emails
const sendMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  }),
  defaultFrom: "Juan from CoreWave <info@corewave.xyz>",
  configPath: "./mailing.config.json",
});

export default sendMail;

// Marketing emails
export const sendMarketingMail = buildSendMail({
  transport: nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_MARKETING_API_SECRET,
    },
  }),
  defaultFrom: "Juan from CoreWave <info@corewave.xyz>",
  configPath: "./mailing.config.json",
});
