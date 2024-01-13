import { useState } from 'react';

const useMenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenChange = (open: boolean) => setIsOpen(open);

  return { onOpenChange, isOpen };
};

export default useMenuDropdown;
