import { z } from 'zod';

export const contactSchema = z.object({
  subject: z.string().min(3, { error: 'Subject is required' }),
  email: z.email({ error: 'E-mail is invalid' }),
  content: z
    .string()
    .min(3, { error: 'Content is required' })
    .max(150, { error: 'Content is too long' }),
});

export type ContactDto = z.infer<typeof contactSchema>;
