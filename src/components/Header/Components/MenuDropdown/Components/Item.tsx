import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

interface ItemProps extends DropdownMenu.DropdownMenuItemProps {
  children: React.ReactNode;
  route: string;
}

const Item = ({ children, route, className, ...rest }: ItemProps) => {
  return (
    <DropdownMenu.Item
      className={`text-text-primary py-6 text-2xl border-y border-primary ${className}`}
      {...rest}
    >
      <Link href={route}>{children}</Link>
    </DropdownMenu.Item>
  );
};

export default Item;
