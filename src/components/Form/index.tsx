import * as Portal from '@radix-ui/react-portal';
import Card from '../Card';
import Divider from '../Divider';
import Input from '../Input';
import Button from '../Button';

import formatCpf from '@/utils/formatCpf';
import formatPhone from '@/utils/formatPhone';
import formatCep from '@/utils/formatCep';

import useForm from './useForm';
import { MouseEvent, MouseEventHandler } from 'react';

const Form = ({
  onClickBackground,
}: {
  onClickBackground: (event: React.MouseEvent<HTMLElement>) => void;
}) => {
  const { errors, register, handleSubmit, onSubmit } = useForm();
  return (
    <Portal.Root>
      <div
        className='fixed px-3 top-0 left-0 w-screen h-full z-[100] bg-black bg-opacity-55 flex items-center justify-center'
        onClick={onClickBackground}
      >
        <Card className='desktop:max-w-[1004px]' isRoundedFull>
          <h1 className='text-text-primary font-bold text-center'>
            Dados do Aluno
          </h1>

          <Divider />

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-3 gap-2 my-2 max-h-[500px] overflow-x-auto tablet:max-h-[650px] tablet:grid-cols-8 desktop:grid-cols-12'>
              <Input
                label='Nome'
                {...register('name')}
                containerStyle='col-span-3 tablet:col-span-5 tablet:col-span-5 desktop:col-span-4'
                helperText={errors.name?.message}
              />

              <Input
                type='date'
                {...register('dateOfBirth')}
                label='Data de Nascimento'
                containerStyle='col-span-3 tablet:col-span-3 desktop:col-span-4'
                helperText={errors.dateOfBirth?.message}
              />

              <Input
                label='CPF'
                {...register('document')}
                containerStyle='col-span-3 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.document?.message}
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = formatCpf(value)!;
                }}
              />

              <Input
                label='Telefone'
                {...register('phone')}
                containerStyle='col-span-3 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.phone?.message}
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = formatPhone(value);
                }}
              />

              <Input
                label='E-mail'
                {...register('email')}
                containerStyle='col-span-3 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.email?.message}
              />

              <Input
                label='CEP'
                {...register('zipCode')}
                containerStyle='col-span-3 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.zipCode?.message}
                onChange={(event) => {
                  const { value } = event.target;
                  event.target.value = formatCep(value)!;
                }}
              />

              <Input
                label='Rua'
                {...register('street')}
                containerStyle='col-span-3 tablet:col-span-6 desktop:col-span-8'
                helperText={errors.street?.message}
              />

              <Input
                label='Número'
                {...register('number')}
                containerStyle='col-span-3 tablet:col-span-2 desktop:col-span-4'
                helperText={errors.number?.message}
              />

              <Input
                label='Bairro'
                {...register('neighborhood')}
                containerStyle='col-span-3 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.neighborhood?.message}
              />

              <Input
                label='Cidade'
                {...register('city')}
                containerStyle='col-span-2 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.city?.message}
              />

              <Input
                label='Estado'
                {...register('state')}
                containerStyle='col-span-1 tablet:col-span-4 desktop:col-span-4'
                helperText={errors.state?.message}
              />
            </div>

            <Button className='w-full font-bold' spacing='lg'>
              Matricule-se
            </Button>
          </form>
        </Card>
      </div>
    </Portal.Root>
  );
};

export default Form;
