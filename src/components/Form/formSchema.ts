import { z } from 'zod';

import isValidCpf from '@/utils/isValidCpf';

export const schema = z.object({
  name: z.string().min(3, { message: 'Campo obrigatório' }),
  dateOfBirth: z.string().min(1, { message: 'Campo obrigatório' }),
  document: z
    .string()
    .min(11, { message: 'Campo obrigatório' })
    .refine(
      (value) => {
        if (value.length === 0) return true;

        return !isValidCpf(value.replace(/\D/g, ''));
      },
      { message: 'CPF inválido' }
    ),
  phone: z.string().min(11, { message: 'Campo obrigatório' }),
  email: z.string().min(4, { message: 'Campo obrigatório' }),
  zipCode: z.string().min(5, { message: 'Campo obrigatório' }),
  street: z.string().min(5, { message: 'Campo obrigatório' }),
  number: z.string().min(2, { message: 'Campo obrigatório' }),
  neighborhood: z.string().min(2, { message: 'Campo obrigatório' }),
  city: z.string().min(2, { message: 'Campo obrigatório' }),
  state: z.string().min(1, { message: 'Campo obrigatório' }),
});

export type StudentForm = z.infer<typeof schema>;
