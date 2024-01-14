import { useState } from 'react';

const useRegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBackgroundClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return { isOpen, setIsOpen, handleBackgroundClick };
};

export default useRegisterButton;
