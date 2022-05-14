import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7e7ed63846881a",
        pass: "8285e80253c1b6"
    }
});
export class NdemailerMailAdapter implements MailAdapter {
    async sendMail(data: SendMailData) {
        const { subject, body } = data;

        await transport.sendMail({
            from: 'Equipe Feedget <feedback@feedget.com>',
            to: 'Vilela Labs <hvilelaeng@gmail.com>',
            subject: subject,
            html: body
        });
    }
}
