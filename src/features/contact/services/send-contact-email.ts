'use server';

import { CreateEmailResponseSuccess, Resend } from 'resend';
import { ContactDto } from '../contracts/contact.dto';
import { success } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

type OperationResult<T> =
  | {
      success: true;
      data?: T;
    }
  | {
      success: false;
      error?: string;
    };

export const sendContactEmail = async (
  data: ContactDto,
): Promise<OperationResult<CreateEmailResponseSuccess>> => {
  const result = await resend.emails.send({
    from: 'Powiadomienia <noreply@updates.webamigos.pl>',
    to: data.email,
    subject: data.subject,
    html: `<p>${data.content}</p>`,
  });

  if (result.error) {
    return {
      success: false,
    };
  }

  return {
    success: true,
    data: result.data,
  };
};
