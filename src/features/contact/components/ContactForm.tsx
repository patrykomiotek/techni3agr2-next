'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { ContactDto, contactSchema } from '../contracts/contact.dto';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/shared/components/Input';
import { Button } from '@/shared/components/Button';

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactDto>({
    resolver: zodResolver(contactSchema),
  });

  const handleContactSubmit: SubmitHandler<ContactDto> = async (data) => {
    // await sendContactEmail(data)
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
