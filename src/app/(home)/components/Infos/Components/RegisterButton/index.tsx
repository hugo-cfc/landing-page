'use client';

import Button from '@/components/Button';
import Form from '@/components/Form';

import useRegisterButton from './useRegisterButton';

const RegisterButton = () => {
  const { isOpen, setIsOpen, handleBackgroundClick } = useRegisterButton();

  return (
    <>
      <Button
        color='secondary'
        className='mt-8 w-full font-bold tablet:w-8/12 tablet:mx-auto'
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        MATRICULE-SE
      </Button>

      {isOpen && <Form onClickBackground={handleBackgroundClick} />}
    </>
  );
};

export default RegisterButton;
