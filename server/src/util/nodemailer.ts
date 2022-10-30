import fs from "fs";
import hbs from "handlebars";
import { createTransport } from "nodemailer";
import * as path from "path";
import { AppError } from "../Errors/AppError";

export class SendEmail {
  async sendMail(
    subject: string,
    email: string,
    nameTemplate: string,
    token: string
  ) {
    const transporter = createTransport({
      host: process.env.EMAIL_HOST,
      port: 2525,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailTemplateSource = fs.readFileSync(
      path.join(`./src/emailTempletes/${nameTemplate}.hbs`),
      "utf8"
    );

    const template = hbs.compile(emailTemplateSource);
    const htmlToSend = template({ token: token });

    let mailOptions = {
      from: "portalband@band.com.br",
      to: email,
      subject: subject,
      html: htmlToSend,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        throw new AppError("Erro ao enviar o email");
      } else {
        return "E-mail enviado com sucesso!";
      }
    });
  }
}
