'use server';

import { Resend } from 'resend';
import { ContactDto } from '../contracts/contact.dto';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendContactEmail = async (data: ContactDto) => {
  const result = await resend.emails.send({
    from: 'Powiadomienia <noreply@updates.webamigos.pl>',
    to: data.email,
    subject: data.subject,
    html: `<p>${data.content}</p>`,
  });
};
