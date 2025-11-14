'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactDto, contactSchema } from '../contracts/contact.dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';
import { sendContactEmail } from '../services/send-contact-email';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDto>({
    resolver: zodResolver(contactSchema),
  });

  const handleContactSubmit: SubmitHandler<ContactDto> = async (data) => {
    console.log({ data });
    const result = await sendContactEmail(data);
    if (result.success) {
      toast.success('Success!');
    } else {
      toast.error('Error!');
    }
  };

  return (
    <form onSubmit={handleSubmit(handleContactSubmit)}>
      <Input label="Subject" {...register('subject')} error={errors.subject} />
      <Input label="E-mail" {...register('email')} error={errors.email} />
      <Input label="Content" {...register('content')} error={errors.content} />
      <div>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};
