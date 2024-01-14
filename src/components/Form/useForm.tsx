import { useForm as useRHForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { StudentForm, schema } from './formSchema';

const useForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRHForm<StudentForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: StudentForm) => {
    console.log(data);
  };

  return { handleSubmit, onSubmit, errors, register };
};

export default useForm;
